import { memo } from 'react';
import { Button } from "react-bootstrap";
import { CodeBlock as CopyBlock, hybrid as theme } from 'react-code-blocks';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faDownload } from "@fortawesome/free-solid-svg-icons";

function download(data, filename) {
    //create a file and put the content, name and type
    var file = new File(["\ufeff"+data], filename, {type: "text/plain:charset=UTF-8"});
  
    //create a ObjectURL in order to download the created file
    let url = window.URL.createObjectURL(file);
  
    //create a hidden link and set the href and click it
    var a = document.createElement("a");
    a.style = "display: none";
    a.href = url;
    a.download = file.name;
    a.click();
    window.URL.revokeObjectURL(url);
}

function copy(data) {
    data = data.substring(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(data);
}

const Code = ({
    code,
    language,
    header,
    filename
}) =>
<div className="code-block">
    <h4 style={{marginBottom: 10}}>
        <span style={{marginLeft: "16%"}}>{header}</span>
        <span className="download">
            <Button onClick={() => copy(code)}><FontAwesomeIcon icon={faCopy}/></Button>
            <Button onClick={() => download(code, filename)}><FontAwesomeIcon icon={faDownload}/></Button>
        </span>
    </h4>
    <CopyBlock
        text={code}
        language={language}
        showLineNumbers={true}
        wrapLongLines={false}
        theme={theme}
        customStyle={{textAlign: "left", height: 400}}
    />
</div>;

export default memo(Code);