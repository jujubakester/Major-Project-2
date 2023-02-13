import { Link } from 'react-router-dom';

export default function Shopsidebar() {
    return (
        <ul className='sidebar Shopsidebar'>
            <li><Link to="">Rings</Link></li>
            <li><Link to="">Earings</Link></li>
            <li><Link to="">Bracelet</Link></li>
            <li><Link to="">Necklace</Link></li>
            <li><Link to="">Etc</Link></li>
            <li><Link to="">Etc2</Link></li>
        </ul>
    ); 
}