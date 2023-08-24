export default function parseCodeBlocksFromCKEditor(ckeditorContent) {
    // Expression régulière pour rechercher des blocs de code
    const codeRegex = /\[code\]([\s\S]*?)\[\/code\]/g;
  
    // Recherche de tous les blocs de code dans le contenu CKEditor
    const codeMatches = ckeditorContent.match(codeRegex);
  
    if (!codeMatches) {
      return [];
    }
  
    // Retourne les blocs de code trouvés
    return codeMatches.map((match) => {
      // Supprime les balises [code] et [/code] pour obtenir le code brut
      return match.replace(/\[code\]|\[\/code\]/g, '');
    });
}