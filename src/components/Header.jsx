import { Container, Nav, Navbar, FormControl, Dropdown, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Import CSS
import Classes from './Header.module.css'
// Import Icons
import { FaShoppingCart } from 'react-icons/fa'
// Import Images
import logo from './../assets/shoppie-cart.svg';

const Header = (props) => {
    return (
        <Navbar className={Classes.darkNavbar} expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand>
                    <Link to='/'>
                        <img className={Classes.brandLogo} src={logo}/>
                    </Link>
                </Navbar.Brand>
                <FormControl
                    type="search"
                    placeholder="Search a product"
                    aria-label="Search"
                    className={Classes.searchBar}
                />
                <Nav>
                    <Dropdown className='menuDropdown'>
                        <Dropdown.Toggle className={Classes.gradientBtn}>
                            <FaShoppingCart color="#0e042d" fontSize="25px"></FaShoppingCart>
                            <Badge className={Classes.btnBadge}>{10} items</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={Classes.dropdownMenu}>
                            <span>Cart is Empty</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;