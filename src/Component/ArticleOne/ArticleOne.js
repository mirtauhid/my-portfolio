import React from 'react';
import './ArticleOne.css';
import '../Style/Style.css';

const ArticleOne = () => {
    return (
        <div>
            <div class="card transition">
                <h2 class="transition">Node JS make it possible!!!</h2><p class="mt-1">Javascript biography and <br/> what actually Node JS doing!</p>
                <div class="cta-container transition"><a href="https://medium.com/@mirtauhidulislam/node-js-make-it-possible-995965cf7143" class="cta">Read Article</a></div>
                <div class="card_circle transition"></div>
            </div>
        </div>
    );
};

export default ArticleOne;