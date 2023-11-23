class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for an issue filter</div>
        );
    }
}

class IssueTable extends React.Component {
    render() {
        const rowStyle = {border: "1px solid silver", padding: 4};
        return(
            <table style={{borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th style={rowStyle}>ID</th>
                        <th style={rowStyle}>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow rowStyle={rowStyle} issue_id={1}>Error in console when clicking Add</IssueRow>
                    <IssueRow rowStyle={rowStyle} issue_id={2}><div>Missing <b>bottom</b> border on panel</div></IssueRow>
                </tbody>
            </table>
        );
    }
}

class IssueRow extends React.Component {
    render() {
        const style = this.props.rowStyle;
        return(
            <tr>
                <td style={style}>{this.props.issue_id}</td>
                <td style={style}>{this.props.children}</td>
            </tr>
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>Thsi is a placeholder for a form to add an issue</div>
        );
    }
}

class IssueList extends React.Component {
    render() {
        return(
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable />
                <hr />
                <IssueAdd />
            </React.Fragment>
        );
    }
}

class BorderWrap extends React.Component {
    render() {
        const borderStyle = {border: "1px solid silver", padding: 6};
        return(
            <div style={borderStyle}>
                {this.props.children}
            </div>
        );
    }
}

const element = <IssueList />;

ReactDOM.render(element, document.getElementById('contents'));