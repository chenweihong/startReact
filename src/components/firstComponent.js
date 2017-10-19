import React, { Component } from 'react';

class FirstComponent extends Component {
    render() {
        
        /*可以在 render 方法里使用 JavaScript 的语法，使用时加上 {} 即可*/
        var name = '我是第一个自定义组件哦'

        /**
         * 返回的组件模板
         */
        return (
            <div>
                <p> {name} </p>
            </div>
        );
    }
}

export default FirstComponent;
