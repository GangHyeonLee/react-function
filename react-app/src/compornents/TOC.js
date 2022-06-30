// 라이브러리 형태로 생성
import React,{ Component } from "react";

class TOC extends Component{
    render() {
        console.log('TOC render');
        
        let lists = [];
        let data = this.props.data;
        let i =0;

        while (i < data.length){
            lists.push(<li key={data[i].id}>
                <a
                    href={
                        "/content/" + data[i].id
                    }
                    data-id = {data[i].id}

                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)
                    }
                >
                    {data[i].title}
                </a></li>);
                
                i = i +1;
        }

        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

// 외부에서도 사용 가능하게끔 내용 추가!
export default TOC;