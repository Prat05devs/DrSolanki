# Support Circle Chatbot Database & Patterns

This document serves as the **single source of truth** for the Support Circle chatbot. It documents all questions, answers, conversation flows, and patterns to make the chatbot extensible and maintainable.

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Question Patterns](#question-patterns)
3. [Answer Mapping](#answer-mapping)
4. [Conversation Flow Trees](#conversation-flow-trees)
5. [Extending the Chatbot](#extending-the-chatbot)
6. [Best Practices](#best-practices)

---

## Architecture Overview

### Design Philosophy
The chatbot follows **Amazon-style customer service patterns**:
- **Suggested Questions Only**: No free-text input, only clickable question buttons
- **Conversational Flow**: Questions lead to follow-up questions, then to answers
- **Context-Aware**: Each response provides relevant next steps
- **Fallback Options**: Always provide contact options for out-of-scope questions

### Data Structure
```typescript
interface QuestionNode {
  id: string;                    // Unique identifier
  question: string;              // The question text (shown as button)
  answer?: string;                // Direct answer (if terminal node)
  followUpQuestions?: QuestionNode[];  // Next level questions
  category?: string;              // For analytics/tracking
  source?: string;                // Where answer comes from (e.g., "faqs", "services")
}
```

### Key Principles
1. **Progressive Disclosure**: Start broad, get specific
2. **Natural Language**: Questions sound like real people asking
3. **Empathy First**: Frame questions from partner/parent perspective
4. **Actionable**: Always end with clear next steps

---

## Question Patterns

### Pattern 1: Initial Entry Points
**Purpose**: Welcome users and identify their primary concern

**Questions**:
- "My partner needs surgery - what should I know?"
- "We're trying to have a baby - what options do we have?"
- "I'm worried about my daughter/mother - what should I know?"
- "What about cost and insurance?"
- "How do I book an appointment?"

**Design Notes**:
- These should cover 80% of common concerns
- Use natural, conversational language
- Frame from family/partner perspective

### Pattern 2: Category-Specific Follow-ups
**Purpose**: Narrow down to specific topics within a category

**Example Flow**: "My partner needs surgery" →
- "She's having a hysterectomy - is it safe?"
- "What is robotic surgery?"
- "How can I support her recovery?"

**Design Notes**:
- Each initial question should have 3-5 follow-ups
- Follow-ups should be mutually exclusive when possible
- Include "I have a different question" option

### Pattern 3: Detail Questions
**Purpose**: Get specific information about a topic

**Example Flow**: "She's having a hysterectomy" →
- "How long is recovery?"
- "Is this approach safe?"
- "When can she come home?"

**Design Notes**:
- These lead directly to answers
- Should address common concerns/fears
- Use reassuring, clear language

### Pattern 4: Terminal Actions
**Purpose**: Provide final answers or connect to human support

**Options**:
- Direct answer from knowledge base
- "Book an appointment" → `/appointment`
- "Contact via WhatsApp" → WhatsApp link
- "Send an email" → Email link
- "Ask another question" → Reset flow

---

## Answer Mapping

### Source: FAQs (Laparoscopic Hysterectomy)

| Question ID | Question Text | Answer Source | Answer Key |
|------------|---------------|---------------|------------|
| `hysterectomy-info` | "She's having a hysterectomy - is it safe?" | `hysterectomyContent` + `faqs` | `introduction` + "What Is Laparoscopic Hysterectomy?" |
| `hysterectomy-recovery` | "How long is recovery?" | `faqs` | "What is Enhanced Recovery After Surgery (ERAS)?" |
| `hysterectomy-safety` | "Is this approach safe?" | `faqs` | "Is This Approach Safe and Proven?" |
| `hysterectomy-discharge` | "When can she come home?" | `faqs` | "Is Early Discharge Really Safe?" |

### Source: Services

| Question ID | Question Text | Answer Source | Answer Key |
|------------|---------------|---------------|------------|
| `robotic-surgery` | "What is robotic surgery?" | `services` | `id: "robotic-laparoscopic"` |
| `fertility-surgery` | "Can surgery help with fertility?" | `services` | `id: "fertility-preservation"` |

### Source: IVF Information

| Question ID | Question Text | Answer Source | Answer Key |
|------------|---------------|---------------|------------|
| `ivf-info` | "What should we know about IVF?" | `ivfInjectionsInfo` | `introduction` |
| `ivf-injections` | "What about IVF injections?" | `ivfInjectionsInfo` | `findings.rFSH` + `findings.efficiency` |

### Source: Custom Answers

| Question ID | Question Text | Answer Type | Answer Content |
|------------|---------------|-------------|----------------|
| `recovery-support` | "How can I support her recovery?" | Custom | Support guidance for partners |
| `surgery-safety` | "Is the surgery safe?" | Custom | General safety reassurance |
| `hospital-info` | "Which hospital is best?" | Custom | Hospital comparison |
| `recovery-time` | "How long is recovery?" | Custom | General recovery timeline |
| `insurance-covered` | "Is it covered by insurance?" | Custom | Insurance information |
| `ivf-cost` | "How much does IVF cost?" | Custom | Cost transparency |
| `appointment-booking` | "How do I book an appointment?" | Custom | Contact information |

---

## Conversation Flow Trees

### Tree 1: Partner Surgery Concerns
```
Initial: "My partner needs surgery - what should I know?"
├── "She's having a hysterectomy - is it safe?"
│   ├── "How long is recovery?" → Answer: ERAS details
│   ├── "Is this approach safe?" → Answer: Study results
│   └── "When can she come home?" → Answer: Discharge safety
├── "What is robotic surgery?" → Answer: Service description
└── "How can I support her recovery?" → Answer: Partner support guide
```

### Tree 2: Fertility Questions
```
Initial: "We're trying to have a baby - what options do we have?"
├── "What should we know about IVF?" → Answer: IVF introduction
├── "What about IVF injections?" → Answer: Injection efficiency study
└── "Can surgery help with fertility?" → Answer: Fertility preservation
```

### Tree 3: Family Concerns
```
Initial: "I'm worried about my daughter/mother - what should I know?"
├── "Is the surgery safe?" → Answer: Safety reassurance
├── "Which hospital is best?" → Answer: Hospital comparison
└── "How long is recovery?" → Answer: Recovery timeline
```

### Tree 4: Practical Questions
```
Initial: "What about cost and insurance?"
├── "Is it covered by insurance?" → Answer: Insurance info
└── "How much does IVF cost?" → Answer: Cost transparency
```

### Tree 5: Direct Actions
```
Initial: "How do I book an appointment?"
→ Answer: Contact methods (Phone, WhatsApp, Email)
```

---

## Extending the Chatbot

### Adding a New Question Category

**Step 1**: Add to Initial Questions
```typescript
{
  id: "new-category",
  question: "New category question text",
  followUpQuestions: [...]
}
```

**Step 2**: Create Follow-up Questions
```typescript
{
  id: "new-category",
  question: "New category question text",
  followUpQuestions: [
    {
      id: "follow-up-1",
      question: "First follow-up question",
      answer: "Answer text or reference to data source"
    }
  ]
}
```

**Step 3**: Map to Data Source
- If answer exists in `siteData.ts`, reference it
- If custom answer needed, add to this document first

**Step 4**: Update This Document
- Add question to [Question Patterns](#question-patterns)
- Add answer mapping to [Answer Mapping](#answer-mapping)
- Add flow tree to [Conversation Flow Trees](#conversation-flow-trees)

### Adding a New Answer Source

**Step 1**: Add Data to `siteData.ts`
```typescript
export const newData = {
  // Your data structure
};
```

**Step 2**: Import in Chatbot Component
```typescript
import { newData } from "@/data/siteData";
```

**Step 3**: Reference in Question Node
```typescript
{
  id: "question-id",
  question: "Question text",
  answer: newData.specificField,
  source: "newData"
}
```

**Step 4**: Document Here
- Add to Answer Mapping table
- Note the source and key

### Best Practices for Questions

1. **Use Natural Language**
   - ❌ "Hysterectomy procedure information"
   - ✅ "She's having a hysterectomy - is it safe?"

2. **Frame from User Perspective**
   - ❌ "Laparoscopic surgery benefits"
   - ✅ "My partner needs surgery - what should I know?"

3. **Address Emotions**
   - Include questions about safety, recovery, support
   - Acknowledge concerns and fears

4. **Keep It Simple**
   - One question per button
   - Clear, concise wording
   - Avoid medical jargon when possible

5. **Provide Context**
   - Questions should make sense in the conversation flow
   - Each level should narrow the focus

---

## Answer Content Guidelines

### Structure
1. **Opening**: Address the concern directly
2. **Main Content**: Key information from source
3. **Closing**: Next steps or reassurance

### Tone
- **Empathetic**: Acknowledge concerns
- **Reassuring**: Provide confidence
- **Clear**: Use simple language
- **Actionable**: Always suggest next steps

### Formatting
- Use line breaks (`\n`) for readability
- Use bullet points when listing benefits
- Keep paragraphs short (2-3 sentences)

### Example Answer Structure
```
[Direct answer to question]

[Key information from source]

[Benefits/outcomes]

[Next steps or reassurance]
```

---

## Fallback Patterns

### When Question Not Found
1. Acknowledge the question
2. Offer contact options:
   - "Book an appointment"
   - "Contact via WhatsApp"
   - "Send an email"
   - "Ask another question"

### When Answer Not Available
1. Provide general reassurance
2. Direct to human support
3. Offer to connect via preferred method

---

## Analytics & Tracking

### Question Categories
- `partner-surgery`: Partner concerns about surgery
- `fertility-questions`: Fertility and IVF questions
- `family-concerns`: Family member concerns
- `cost-insurance`: Financial questions
- `appointment-booking`: Direct booking requests

### Metrics to Track
- Most clicked initial questions
- Most common question paths
- Questions leading to contact actions
- Questions with no answers (need content)

---

## Maintenance Checklist

### Weekly
- [ ] Review unanswered questions
- [ ] Check for new content in `single_source_of_truth.md`
- [ ] Update answers if source data changed

### Monthly
- [ ] Add new common questions
- [ ] Refine question wording based on user feedback
- [ ] Update conversation flows
- [ ] Review and update this document

### Quarterly
- [ ] Major content audit
- [ ] Add new question categories
- [ ] Optimize conversation flows
- [ ] Update answer mappings

---

## Example: Complete Question Node

```typescript
{
  id: "hysterectomy-info",
  question: "She's having a hysterectomy - is it safe?",
  category: "partner-surgery",
  source: "hysterectomyContent + faqs",
  answer: hysterectomyContent.introduction + "\n\n" + 
          faqs.find(f => f.question === "What Is Laparoscopic Hysterectomy?")?.answer,
  followUpQuestions: [
    {
      id: "hysterectomy-recovery",
      question: "How long is recovery?",
      category: "partner-surgery",
      source: "faqs",
      answer: faqs.find(f => f.question === "What is Enhanced Recovery After Surgery (ERAS)?")?.answer
    },
    {
      id: "hysterectomy-safety",
      question: "Is this approach safe?",
      category: "partner-surgery",
      source: "faqs",
      answer: faqs.find(f => f.question === "Is This Approach Safe and Proven?")?.answer
    },
    {
      id: "hysterectomy-discharge",
      question: "When can she come home?",
      category: "partner-surgery",
      source: "faqs",
      answer: faqs.find(f => f.question === "Is Early Discharge Really Safe?")?.answer
    }
  ]
}
```

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2024-01-XX | Initial chatbot database structure | Development Team |

---

## Notes

- **Always update this document** when adding new questions or answers
- **Test conversation flows** before deploying
- **Keep answers aligned** with `single_source_of_truth.md`
- **Maintain empathy** in all question and answer text
- **Regularly review** for outdated information

---

## Contact for Updates

When adding new content:
1. Update `siteData.ts` if adding new data sources
2. Update `Chatbot.tsx` with new question nodes
3. Update this document with new patterns
4. Test the conversation flow
5. Deploy and monitor
