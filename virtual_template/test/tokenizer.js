const Tokenizer = require('../src/tokenizer');

const input = `
<div class="banner-gift banner-event" data-templateid="<%-obj.templateId||''%>" data-uid="<%-obj.uid||''%>" data-url="<%-obj.url||''%>">
    <div class="banner-gift_left">
        <img src="<%-obj.left%>" alt="Left Image" />
    </div>
    <div class="banner-gift_content" style="background:<%-obj.background%>">
        <% for(var i=0; i < obj.content.length; i++){ %>
            <span style="color:<%-obj.content[i].color%>">
                <%-obj.content[i].text%>
            </span>
        <% } %>
    </div>
    <div class="banner-gift_right">
        <img src="<%-obj.right%>" alt="Right Image" />
    </div>
    <div id="text">hehe</div>
</div>
`;

const tokenizer = new Tokenizer(input);

const tokens = tokenizer.execute();

// console.log(tokens);

module.exports = tokens;