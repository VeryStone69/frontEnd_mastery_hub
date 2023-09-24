import s from './Loader.module.css'

export const Loader = () => {
    return(
            <div className={s.lds_ellipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )

}