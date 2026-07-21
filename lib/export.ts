import { GenerationResult } from "@/components/OutputSection";
import toast from "react-hot-toast";

export function exportAsText(result: GenerationResult) {
  let text = "";

  result.captions.forEach((caption, index) => {
    text += `=============================\n`;
    text += `Caption ${index + 1}\n`;
    text += `=============================\n\n`;

    text += `English\n`;
    text += `${caption.english}\n\n`;

    text += `Urdu\n`;
    text += `${caption.urdu}\n\n`;

    text += `Roman Urdu\n`;
    text += `${caption.romanUrdu}\n\n`;
  });

  text += `=============================\n`;
  text += `Hashtags\n`;
  text += `=============================\n\n`;

  text += result.hashtags.join(" ");

  text += `\n\n=============================\n`;
  text += `Reel Idea\n`;
  text += `=============================\n\n`;

  text += result.reelIdea;

  text += `\n\n=============================\n`;
  text += `Story Idea\n`;
  text += `=============================\n\n`;

  text += result.storyIdea;

  text += `\n\n=============================\n`;
  text += `Image Prompt\n`;
  text += `=============================\n\n`;

  text += result.imagePrompt;

  const blob = new Blob([text], {
    type: "text/plain",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;

  a.download = "LikhoAI-Content.txt";

  a.click();
  toast.success("TXT exported successfully!");

  URL.revokeObjectURL(url);
}