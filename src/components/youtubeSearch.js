import React from 'react'
import ReactDOM from 'react-dom'
import xhr from 'xhr'
import YoutubeResults from './youtubeResults'

export default class YoutubeSearch extends React.Component {

    state = {
        data: []
    };

    searchAction = (evt) => {
        var finalSearchKey = encodeURIComponent(evt.target.value);
        var urlAPI = 'https://www.googleapis.com/youtube/v3/search?q=';
        var urlKey = '&key=YouTube_Key&maxResults=18&part=snippet';
        var url = urlAPI + finalSearchKey + urlKey;
        var reactThis = this;

        if (finalSearchKey.length > 1) {
            xhr({
                url: url
            }, function (err, data) {
                var finalData = JSON.parse(data.body);
                reactThis.setState({ data: finalData.items })
            });
        }
    };

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.searchInput).focus();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="text" className="form-control" id="searchKey"
                            placeholder="Search here" ref="searchInput"
                            onKeyUp={this.searchAction} />
                    </div>
                </div>
                <YoutubeResults data={this.state.data}/>
            </div>
        )
    }
}