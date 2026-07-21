export interface PromptInput {
  businessType: string;
  product: string;
  description: string;
  occasion: string;
  tone: string;
  platform: string;
  language: string;

  // Optional Business Profile
  businessName?: string;
  businessCategory?: string;
  businessDescription?: string;
  targetAudience?: string;
  brandVoice?: string;
}

function getPlatformInstructions(platform: string) {
  switch (platform) {
    case "Facebook":
      return `
• Write medium-length engaging captions.
• Encourage likes, comments and shares.
• End with a clear Call-To-Action.
• Use 2-4 relevant emojis naturally.
• Suitable for Pakistani Facebook users.
`;

    case "Instagram":
      return `
• Write visually attractive captions.
• Start with a strong hook.
• Keep paragraphs short.
• Use 2-4 emojis naturally.
• Encourage saves, shares and comments.
`;

    case "LinkedIn":
      return `
• Professional business writing.
• Educational and trustworthy.
• Exactly ONE emoji.
• End with a professional CTA.
`;

    case "WhatsApp Status":
      return `
• Very short.
• Maximum 2-3 lines.
• Easy to read.
• Use 1-2 catchy emojis.
• Suitable for WhatsApp Status.
`;

    case "TikTok":
      return `
• Start with a powerful hook.
• Create curiosity.
• Trendy wording.
• Use 2-4 energetic emojis.
• Encourage viewers to follow or order.
`;

    default:
      return `
• Make the content engaging.
• Include a CTA.
• Use 2-3 emojis naturally.
`;
  }
}

function getToneInstructions(tone: string) {
  switch (tone) {
    case "Professional":
      return `
• Formal.
• Business focused.
• Trustworthy.
• Confident.
• Exactly ONE emoji.
`;

    case "Friendly":
      return `
• Warm.
• Conversational.
• Cheerful.
• Helpful.
• Use 2-4 emojis.
`;

    case "Funny":
      return `
• Humorous.
• Playful.
• Light-hearted.
• Family friendly.
• Use 2-4 playful emojis.
`;

    case "Luxury":
      return `
• Premium.
• Elegant.
• Sophisticated.
• High-end wording.
• Use 1-2 tasteful emojis like ✨🥂.
`;

    case "Urgent":
      return `
• Create urgency.
• Mention limited stock if appropriate.
• Encourage immediate action.
• Use urgency emojis like ⏰🔥⚡.
`;

    case "Casual":
      return `
• Relaxed.
• Natural.
• Everyday language.
• Use 2-3 emojis.
`;

    default:
      return `
• Friendly.
• Engaging.
• Use 2-3 emojis.
`;
  }
}

function getLanguageInstructions(language: string) {
  switch (language) {
    case "English":
      return `
English should be the primary language.

Also generate:
• Urdu
• Roman Urdu
`;

    case "Urdu":
      return `
Urdu should be the primary language.

Also generate:
• English
• Roman Urdu
`;

    case "Roman Urdu":
      return `
Roman Urdu should be the primary language.

Also generate:
• English
• Urdu
`;

    case "Mix of all three":
      return `
Generate natural English, Urdu and Roman Urdu.

Do NOT translate word-for-word.

Each language should sound native.
`;

    default:
      return `
Generate English, Urdu and Roman Urdu naturally.
`;
  }
}

function getOccasionInstructions(occasion: string) {
  switch (occasion) {
    case "New Arrival":
      return `
Highlight the new arrival.
Create excitement.
`;

    case "Sale / Discount":
      return `
Mention the sale naturally.
Create urgency.
Encourage quick purchase.
`;

    case "Festival (Eid)":
      return `
Include festive greetings.
Celebrate the occasion.
`;

    case "Quick Tip":
      return `
Give useful advice.
Keep it educational.
Softly promote the business.
`;

    default:
      return `
General promotional content.
`;
  }
}

export function buildPrompt(input: PromptInput) {
  return `
You are an expert Pakistani Social Media Marketing Manager and professional copywriter.

Your job is to create highly engaging social media content for Pakistani businesses.

==================================================
BUSINESS PROFILE
==================================================

Business Name:
${input.businessName || "Not provided"}

Business Category:
${input.businessCategory || input.businessType}

Business Description:
${input.businessDescription || input.description}

Target Audience:
${input.targetAudience || "General Pakistani Audience"}

Brand Voice:
${input.brandVoice || input.tone}

==================================================
BUSINESS DETAILS
==================================================

Business Type:
${input.businessType}

Product / Service:
${input.product}

Description:
${input.description}

Occasion:
${input.occasion}

Tone:
${input.tone}

Platform:
${input.platform}

Preferred Language:
${input.language}

==================================================
PLATFORM RULES
==================================================

${getPlatformInstructions(input.platform)}

==================================================
TONE RULES
==================================================

${getToneInstructions(input.tone)}

==================================================
LANGUAGE RULES
==================================================

${getLanguageInstructions(input.language)}

==================================================
OCCASION RULES
==================================================

${getOccasionInstructions(input.occasion)}

==================================================
PAKISTANI AUDIENCE
==================================================

• Write naturally for Pakistani audiences.
• Use Pakistani English instead of American slang.
• Keep wording culturally appropriate.
• Mention Pakistan or city names only if they fit naturally.
• Never force city names.

==================================================
EMOJI RULE
==================================================

Every caption MUST include emojis.

Professional & LinkedIn:
Exactly ONE emoji.

Luxury:
1-2 elegant emojis.

Friendly/Funny/Casual:
2-4 emojis.

WhatsApp:
1-2 emojis.

Instagram/Facebook/TikTok:
2-4 emojis.

Do NOT place every emoji only at the end.
Blend them naturally into the caption.

==================================================
CONTENT REQUIREMENTS
==================================================

Generate EXACTLY FIVE different caption variants.

Each variant must contain:

• English caption
• Urdu caption
• Roman Urdu caption

Every variant should have:

• Different opening
• Different sentence structure
• Different CTA
• Different emojis
• Different wording

Do NOT simply replace a few words. 

Do not continue until every caption contains emojis.

==================================================
CALL TO ACTION
==================================================

Use platform-specific CTAs.

Facebook:
• Comment below
• Message us today
• Share with friends

Instagram:
• DM now
• Save this post
• Tag a friend

LinkedIn:
• Connect with us
• Learn more

WhatsApp:
• Inbox now
• Contact today

TikTok:
• Follow for more
• Order now

==================================================
HASHTAGS
==================================================

Generate EXACTLY 10 hashtags.

Rules:

• Start every hashtag with #
• Mix niche hashtags with Pakistani hashtags
• No spaces
• No duplicate hashtags
• Keep them relevant

==================================================
REEL IDEA
==================================================

Generate ONE Reel Idea including:

• Hook
• Scene suggestions
• Ending CTA

==================================================
STORY IDEA
==================================================

Generate ONE Story Idea including:

• Story text
• Sticker suggestion
• CTA

==================================================
AI IMAGE PROMPT
==================================================

Generate ONE realistic AI image prompt.

Include:

• Subject
• Environment
• Lighting
• Camera angle
• Colors
• Premium marketing look
• Ultra realistic
• High quality

Do NOT include emojis.

==================================================
JSON RULES
==================================================

Return ONLY valid JSON.

Never include:

• Markdown
• Triple backticks
• Comments
• Explanations
• Notes
• Numbering

Do not leave fields empty.

==================================================
OUTPUT FORMAT
==================================================

Return EXACTLY this schema:

{
  "captions": [
    {
      "english": "",
      "urdu": "",
      "romanUrdu": ""
    }
  ],
  "hashtags": [
    "#tag1",
    "#tag2"
  ],
  "reelIdea": "",
  "storyIdea": "",
  "imagePrompt": ""
}

Return ONLY JSON.
`;
}