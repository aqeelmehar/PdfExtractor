
export function classifyDocument(text) {
    const cvKeywords = ['skills', 'education', 'experience', 'resume', 'objective','hobbies','email'];
    const officeKeywords = ['meeting', 'report', 'presentation', 'minutes', 'agenda','bank','amount'];
    const assignKeywords = ['question', 'solve', 'sir', 'date', 'last date'];
    const textLower = text.toLowerCase();
    let isCV = cvKeywords.some((keyword) => textLower.includes(keyword));
    let isOfficeDoc = officeKeywords.some((keyword) => textLower.includes(keyword));
    let isassignKeywords= assignKeywords.some((keyword) => textLower.includes(keyword));
  
    if (isCV) return 'CV';
    if (isOfficeDoc) return 'Office Document';
    if (isassignKeywords) return 'Assignment';
    return 'Unclassified';
  }
  