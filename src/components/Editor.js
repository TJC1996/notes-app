// import React from "react"
// import ReactMde from "react-mde"
// import Showdown from "showdown"

// export default function Editor({ currentNote, updateNote }) {
//     const [selectedTab, setSelectedTab] = React.useState("write")

//     const converter = new Showdown.Converter({
//         tables: true,
//         simplifiedAutoLink: true,
//         strikethrough: true,
//         tasklists: true,
//     })  

//     return (
//         <section className="pane editor">
//             <ReactMde
//                 value={currentNote.body}
//                 onChange={updateNote}
//                 selectedTab={selectedTab}
//                 onTabChange={setSelectedTab}
//                 generateMarkdownPreview={(markdown) =>
//                     Promise.resolve(converter.makeHtml(markdown))
//                 }
//                 minEditorHeight={80}
//                 heightUnits="vh"
//             />
//         </section>
//     )
// }

import React, { useState, useEffect } from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";
import { debounce } from 'lodash';

export default function Editor({ currentNote, updateNote }) {
    const [selectedTab, setSelectedTab] = useState("write");
    const [localBody, setLocalBody] = useState(currentNote.body);

    useEffect(() => {
        setLocalBody(currentNote.body);
    }, [currentNote.body]);

    // Debounce the passed updateNote function
    const debouncedUpdateNote = React.useCallback(debounce(updateNote, 500), [updateNote]);

    const handleBodyChange = (text) => {
        setLocalBody(text);
        debouncedUpdateNote(text);
    };

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    });

    return (
        <section className="pane editor">
            <ReactMde
                value={localBody}
                onChange={handleBodyChange}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
            />
        </section>
    );
}
