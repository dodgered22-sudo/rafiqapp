
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getPetAdvice(query: string, history: { role: string; text: string }[] = []) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: query }] }
      ],
      config: {
        systemInstruction: `أنت "رفيق"، المساعد الذكي والخبير في رعاية الحيوانات الأليفة في المملكة العربية السعودية.
مهمتك الأساسية هي مساعدة المستخدم في العثور على المتجر المثالي، أو الخدمة المناسبة، أو نوع الطعام الأفضل لأليفه.

قواعد التعامل:
1. ابدأ دائماً بالترحيب واسأل المستخدم عن نوع أليفه (قطة، كلب، طير، إلخ).
2. اسأل عن عمر الأليف واحتياجاته الحالية (هل يبحث عن طعام، حلاقة، علاج طبي، أو ألعاب؟).
3. بناءً على إجابات المستخدم، قدم توصيات محددة. مثال: "بما أن قطتك عمرها 3 سنوات، أنصحك بـ 'طعام قطط فاخر' من متجرنا، أو حجز موعد في 'صالون فروي ستايل'".
4. أجب دائماً باللغة العربية بأسلوب ودود ومرح.
5. إذا سُئلت عن تشخيص طبي خطير، انصح دائماً بزيارة طبيب بيطري مختص.
6. حاول دائماً توجيه المستخدم نحو الخدمات المتاحة في تطبيق "رفيق" (مثل المتجر، الخدمات الطبية، وخدمات الحلاقة).`,
        temperature: 0.7,
      }
    });

    return response.text || "عذراً، لم أستطع معالجة طلبك حالياً. حاول مرة أخرى.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "حدث خطأ أثناء التواصل مع خبيرنا الذكي. يرجى التحقق من اتصالك.";
  }
}

export async function checkSymptom(symptoms: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `بناءً على الأعراض التالية: "${symptoms}"، قدم تحليلاً أولياً سريعاً ونصيحة باللغة العربية. هل الحالة طارئة؟`,
      config: {
        systemInstruction: "أنت مساعد تشخيص أولي بيطري. لا تقدم تشخيصات نهائية ولكن قدم احتمالات ونصائح فورية بناءً على الأعراض. أخبر المستخدم بمدى إلحاح الحالة.",
      }
    });
    return response.text;
  } catch (error) {
    return "لا يمكنني تقديم المشورة الطبية حالياً.";
  }
}