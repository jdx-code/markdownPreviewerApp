import React from "react";
import {marked} from 'marked'
import './App.css'
import Footer from "./Footer/Footer.js"

const MARKEDTEXT = {
    text : `# H1 \n ` + 
    `## H2 \n` + 
    ` [title](https://www.example.com) \n` + 
    ` \`code\` \n` +
            `\`\`\` \n` +
            `{ \n` +
            `"firstName": "John", \n` +
            `"lastName": "Smith", \n` +
            `"age": 25 \n` +
            `} \n` +
            `\`\`\` \n` +
            `- First item\n - Second item\n - Third item\n > blockquote \n ![alt text](image.jpg) \n` +
            `**bold text**`
}

marked.setOptions({
    breaks: true
})

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: MARKEDTEXT.text
        }

        this.editorInput = this.editorInput.bind(this)
    }    

    editorInput(event) {
        this.setState({
            input: event.target.value
        })
    }
    render(){
        return(
            <div class="container-fluid">
                <div class="row py-6"> 
                    <div class="header">
                        <h1 class="text-center"> 
                            <u>Markdown Previewer App</u>
                        </h1>
                    </div>                   
                    

                    <div class="col-md-6">
                        <textarea class="form-control" id="editor" onChange={this.editorInput} value={this.state.input}></textarea>
                        
                    </div>

                    <div class="col-md-5">
                        <div id="preview" class="overflow-auto" dangerouslySetInnerHTML={{__html: marked(this.state.input)}}> 
                        </div>                                       
                    </div>
                </div>
                <Footer />
            </div>            

        )
    }
}

export default App