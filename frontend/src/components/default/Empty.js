// import iconGray from './../../assets/img/icon-gray.svg';

const Empty = (props) => {
    return (
        <div className={`${props.className ? props.className : '' }`}>
            {/* <img width="72" src={props.icon} alt="icon" /> */}
            <p>{props.message ?? 'Empty'}</p>
        </div>
    );
}

export default Empty;