import bm25 from "wink-bm25-text-search";
import winkNLP from "wink-nlp";
import model from "wink-eng-lite-web-model";

const prepTask = (text) => {
    const nlp = winkNLP(model);
    const its = nlp.its;
    const tokens = [];
    nlp.readDoc(text)
        .tokens()
        // Use only words ignoring punctuations etc and from them remove stop words
        .filter((t) => t.out(its.type) === "word" && !t.out(its.stopWordFlag))
        // Handle negation and extract stem of the word
        .each((t) =>
            tokens.push(
                t.out(its.negationFlag)
                    ? "!" + t.out(its.stem)
                    : t.out(its.stem)
            )
        );
    return tokens;
};

let engine = bm25();
let currentList = [];

const buildIndex = (list) => {
    currentList = list;
    if (currentList.length < 3) return;
    // Create search engine's instance
    engine = bm25();
    // Load sample data (load any other JSON data instead of sample)
    // var docs = require("wink-bm25-text-search/sample-data/demo-data-for-wink-bm25.json");
    const docs = currentList.map(({ name, content }) => {
        return { title: name, body: content };
    });

    // Step I: Define config
    // Only field weights are required in this example.
    engine.defineConfig({ fldWeights: { title: 1, body: 2 } });
    // Step II: Define PrepTasks pipe.
    // Set up 'default' preparatory tasks i.e. for everything else
    engine.definePrepTasks([prepTask]);
    // Step III: Add Docs
    // Add documents now...
    docs.forEach((doc, i) => {
        // Note, 'i' becomes the unique id for 'doc'
        engine.addDoc(doc, i);
    });

    // Step IV: Consolidate
    // Consolidate before searching
    engine.consolidate();
};

const searchQuery = (keywords) => {
    if (currentList.length < 3 || keywords.length === 0) return currentList;
    // All set, start searching!
    const query = keywords.join(" ");
    // `results` is an array of [ doc-id, score ], sorted by score
    const results = engine.search(query);

    return results.map((element) => currentList[element[0]]);

    // // Print number of results.
    // console.log("%d entries found.", results.length);
    // // -> 1 entries found.
    // // results[ 0 ][ 0 ] i.e. the top result is:
    // console.log(docs[results[0][0]].body);
    // // -> George Walker Bush (born July 6, 1946) is an...
    // // -> ... He never studied Law...
};

export { buildIndex, searchQuery };
