import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { SearchOutlined, LoadingOutlined, CloseCircleFilled } from '@ant-design/icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a href="/">
                        <img src={images.logo} alt="TikTok" />
                    </a>
                </div>
                <div className={cx('search')}>
                    <input placeholder="Tìm kiếm" spellCheck={false} />
                    <button className={cx('clear')}>
                        <CloseCircleFilled />
                    </button>
                    <LoadingOutlined className={cx('loading')} />
                    <button className={cx('search-btn')}>
                        <SearchOutlined />
                    </button>
                </div>
                <div className={cx('action')}>
                    <Button primary>Login</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
