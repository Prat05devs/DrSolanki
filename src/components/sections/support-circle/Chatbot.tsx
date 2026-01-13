"use client";

/**
 * Support Circle Chatbot Component
 * 
 * This chatbot provides an Amazon-style conversational interface with suggested questions.
 * Users click through questions to get answers from our knowledge base.
 * 
 * 📚 Database & Patterns: See CHATBOT_DATABASE.md for:
 * - All question patterns and flows
 * - Answer mappings to data sources
 * - How to extend and maintain the chatbot
 * 
 * Key Features:
 * - Suggested questions only (no free-text input)
 * - Progressive disclosure (broad → specific → answer)
 * - Answers from single_source_of_truth.md via siteData.ts
 * - Fallback to contact options for out-of-scope questions
 */

import { useState } from "react";
import { faqs, services, hysterectomyContent, ivfInjectionsInfo, contactInfo } from "@/data/siteData";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  suggestedQuestions?: string[];
}

interface QuestionNode {
  id: string;
  question: string;
  answer?: string;
  followUpQuestions?: QuestionNode[];
  category?: string;
}

// Chatbot knowledge base - maps questions to answers from single source of truth
// ⚠️ IMPORTANT: When updating questions/answers, also update CHATBOT_DATABASE.md
const chatbotKnowledge: QuestionNode[] = [
  {
    id: "initial",
    question: "How can I help you today?",
    followUpQuestions: [
      {
        id: "partner-surgery",
        question: "My partner needs surgery - what should I know?",
        followUpQuestions: [
          {
            id: "hysterectomy-info",
            question: "She's having a hysterectomy - is it safe?",
            answer: hysterectomyContent.introduction + "\n\n" + faqs.find(f => f.question === "What Is Laparoscopic Hysterectomy?")?.answer,
            followUpQuestions: [
              {
                id: "hysterectomy-recovery",
                question: "How long is recovery?",
                answer: faqs.find(f => f.question === "What is Enhanced Recovery After Surgery (ERAS)?")?.answer
              },
              {
                id: "hysterectomy-safety",
                question: "Is this approach safe?",
                answer: faqs.find(f => f.question === "Is This Approach Safe and Proven?")?.answer
              },
              {
                id: "hysterectomy-discharge",
                question: "When can she come home?",
                answer: faqs.find(f => f.question === "Is Early Discharge Really Safe?")?.answer
              }
            ]
          },
          {
            id: "robotic-surgery",
            question: "What is robotic surgery?",
            answer: `${services.find(s => s.id === "robotic-laparoscopic")?.description}\n\n${services.find(s => s.id === "robotic-laparoscopic")?.benefits?.join("\n• ")}`
          },
          {
            id: "recovery-support",
            question: "How can I support her recovery?",
            answer: "Supporting your partner's recovery involves: Being patient and understanding, Helping with daily tasks initially, Encouraging gentle movement as recommended, Providing emotional support, Following post-surgery care instructions. Dr. Smit's approach focuses on faster recovery with minimal pain, so most patients return to normal activities sooner than traditional surgery."
          }
        ]
      },
      {
        id: "fertility-questions",
        question: "We're trying to have a baby - what options do we have?",
        followUpQuestions: [
          {
            id: "ivf-info",
            question: "What should we know about IVF?",
            answer: ivfInjectionsInfo.introduction + "\n\n" + "IVF involves hormone injections to help produce eggs. The type of injection matters for success rates and efficiency."
          },
          {
            id: "ivf-injections",
            question: "What about IVF injections?",
            answer: `${ivfInjectionsInfo.findings.rFSH.title}\n\n${ivfInjectionsInfo.findings.rFSH.description}\n\n${ivfInjectionsInfo.findings.rFSH.benefits.join(", ")}\n\n${ivfInjectionsInfo.findings.efficiency.title}\n\n${ivfInjectionsInfo.findings.efficiency.description}\n\n${ivfInjectionsInfo.findings.efficiency.benefits.join(", ")}`
          },
          {
            id: "fertility-surgery",
            question: "Can surgery help with fertility?",
            answer: `${services.find(s => s.id === "fertility-preservation")?.description}\n\n${services.find(s => s.id === "fertility-preservation")?.note}`
          }
        ]
      },
      {
        id: "family-concerns",
        question: "I'm worried about my daughter/mother - what should I know?",
        followUpQuestions: [
          {
            id: "surgery-safety",
            question: "Is the surgery safe?",
            answer: "Yes. Dr. Smit Bharat Solanki uses advanced minimally invasive techniques including robotic surgery, which means: Less pain, Smaller scars, Faster recovery, Lower risk of complications. All procedures follow international safety standards."
          },
          {
            id: "hospital-info",
            question: "Which hospital is best?",
            answer: "Dr. Smit practices at multiple locations: Parth Hospital (Ahmedabad) - Robotic surgery with DaVinci system, Parul Sevashram Hospital (Vadodara) - Comprehensive fertility services, Satyam Hospital (Vadodara) - Multi-specialty care. All locations offer world-class facilities and personalized care."
          },
          {
            id: "recovery-time",
            question: "How long is recovery?",
            answer: "Recovery time varies by procedure, but Dr. Smit's Enhanced Recovery After Surgery (ERAS) approach means: Most patients walk within 6 hours, Start eating within 6 hours, Many go home within 24 hours (when safe), Faster return to normal activities compared to traditional surgery."
          }
        ]
      },
      {
        id: "cost-insurance",
        question: "What about cost and insurance?",
        followUpQuestions: [
          {
            id: "insurance-covered",
            question: "Is it covered by insurance?",
            answer: "Many procedures are covered by insurance. Dr. Smit's team works with cashless insurance at Parth Hospital and other locations. It's best to discuss your specific insurance coverage during consultation."
          },
          {
            id: "ivf-cost",
            question: "How much does IVF cost?",
            answer: "IVF costs vary based on the protocol and medications used. While some medications cost more per injection, they may be more cost-effective overall because they produce better-quality embryos, potentially reducing the need for multiple cycles. The best approach is to discuss your specific situation during consultation."
          }
        ]
      },
      {
        id: "appointment-booking",
        question: "How do I book an appointment?",
        answer: `You can book an appointment in several ways:\n\n• Call: ${contactInfo.phone}\n• WhatsApp: Click the WhatsApp button below\n• Email: ${contactInfo.email}\n\nDr. Smit sees patients at multiple locations in Ahmedabad and Vadodara. All consultations require prior appointment booking.`
      }
    ]
  }
];

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm here to help answer questions about Dr. Smit's care. Whether you're a partner, parent, or family member, I can guide you through common concerns. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
      suggestedQuestions: chatbotKnowledge[0].followUpQuestions?.map(q => q.question) || []
    }
  ]);
  const [currentNode, setCurrentNode] = useState<QuestionNode>(chatbotKnowledge[0]);
  const [isTyping, setIsTyping] = useState(false);

  const findNodeById = (id: string, nodes: QuestionNode[] = chatbotKnowledge): QuestionNode | null => {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.followUpQuestions) {
        const found = findNodeById(id, node.followUpQuestions);
        if (found) return found;
      }
    }
    return null;
  };

  const handleQuestionClick = (questionText: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: questionText,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Find the matching question node
    const findQuestionNode = (nodes: QuestionNode[]): QuestionNode | null => {
      for (const node of nodes) {
        if (node.question === questionText) return node;
        if (node.followUpQuestions) {
          const found = findQuestionNode(node.followUpQuestions);
          if (found) return found;
        }
      }
      return null;
    };

    const selectedNode = findQuestionNode(chatbotKnowledge);
    
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      
      if (selectedNode) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: selectedNode.answer || "I understand your concern. Let me help you with more specific information.",
          isBot: true,
          timestamp: new Date(),
          suggestedQuestions: selectedNode.followUpQuestions?.map(q => q.question) || 
            (selectedNode.answer ? ["Ask another question", "Book an appointment", "Contact via WhatsApp"] : [])
        };
        
        setMessages(prev => [...prev, botMessage]);
        setCurrentNode(selectedNode);
      } else {
        // Out of scope - offer contact options
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "I understand your question, but I'd like to connect you with Dr. Smit's team for a personalized answer. How would you like to proceed?",
          isBot: true,
          timestamp: new Date(),
          suggestedQuestions: ["Book an appointment", "Contact via WhatsApp", "Send an email", "Ask another question"]
        };
        setMessages(prev => [...prev, botMessage]);
      }
    }, 1000);
  };

  const handleActionClick = (action: string) => {
    if (action === "Book an appointment") {
      window.location.href = "/appointment";
    } else if (action === "Contact via WhatsApp") {
      window.open(`https://wa.me/919712982198`, "_blank");
    } else if (action === "Send an email") {
      window.location.href = `mailto:${contactInfo.email}`;
    } else if (action === "Ask another question") {
      handleQuestionClick("How can I help you today?");
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-2xl shadow-xl border border-[#E6DCCA] overflow-hidden">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-[#D98E5F] to-[#c57d4f] px-6 py-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-xl">support_agent</span>
        </div>
        <div>
          <h3 className="text-white font-bold text-sm">Support Assistant</h3>
          <p className="text-white/80 text-xs">Here to help with your questions</p>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#FDFBF7]">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.isBot
                  ? "bg-white border border-[#E6DCCA] text-[#2D241E]"
                  : "bg-[#D98E5F] text-white"
              }`}
            >
              <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
              {message.suggestedQuestions && message.suggestedQuestions.length > 0 && (
                <div className="mt-4 space-y-2">
                  {message.suggestedQuestions.map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (question.includes("Book") || question.includes("Contact") || question.includes("Send") || question.includes("Ask another")) {
                          handleActionClick(question);
                        } else {
                          handleQuestionClick(question);
                        }
                      }}
                      className="w-full text-left px-4 py-2.5 bg-[#F5F2EB] hover:bg-[#E6DCCA] border border-[#E6DCCA] rounded-xl text-xs font-medium text-[#2D241E] transition-all hover:shadow-sm"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-[#E6DCCA] rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-[#D98E5F] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-2 h-2 bg-[#D98E5F] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                <div className="w-2 h-2 bg-[#D98E5F] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-3 bg-[#F5F2EB] border-t border-[#E6DCCA] text-center">
        <p className="text-xs text-[#8C8479]">
          Need more help? <button onClick={() => window.open(`https://wa.me/919712982198`, "_blank")} className="text-[#D98E5F] font-semibold hover:underline">Contact us on WhatsApp</button>
        </p>
      </div>
    </div>
  );
}
