import { Link, Outlet } from 'react-router-dom';
export const Products = () => {
    return(
        <>
        
        <div>
            <input type="search" placeholder="Search products..." />
            <h2>Products Page</h2>
        </div>
        <nav>
            <Link to="featured">Featured</Link>
            <Link to="new">New</Link>
        </nav>
        <Outlet />
        </>
    )
}
export default Products;