import Link from 'next/link';
import styles from './index.module.scss'

const CardNew = (props) => {
    return ( 
        <div>
            <p>{props.number}</p>
            <div className={styles.news}>
                <Link href={props.url}>
                    <a className={styles.title}>
                        {props.title} <span>{`( ${props.url} )`}</span>
                    </a>
                </Link>
                <div>
                    <h5 className={styles.subtitle}>
                        {props.points} by {props.user} {props.time_ago} | hide | 
                        <span className={styles.comments}>
                            <Link href={`/news/${props.id}`}>
                                <a>
                                    {props.comments_count} comments
                                </a>
                            </Link>
                        </span>
                    </h5>
                </div>
            </div>
        </div>
     );
}
 
export default CardNew;