import classes from './title.module.css'

export default function Title({ title, originalTitle, overview }) {
    return <div className={classes.title}>
        <div>
            <h3>{title}</h3>
            <h5 id="title2">({originalTitle})</h5>
        </div>
        <p>{overview}</p>
    </div>
}