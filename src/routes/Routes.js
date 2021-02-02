import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import MyProvider from '../context/MyProvider' 

import Header from '../components/Header'
import Home from '../components/Home'
import CreateBlog from '../components/CreateBlog'
import ShowAllBlogs from '../components/ShowAllBlogs'
import ShowBlogDetail from '../components/ShowBlogDetail'
import NotFound404 from '../components/NotFound404'

import Footer from '../components/Footer'


const Routes = () => (
    <MyProvider>
        <Router>
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/createBlog' component={CreateBlog} />
                <Route path='/showAllBlogs' component={ShowAllBlogs} />
                <Route path="/showBlogDetail/" component={ShowBlogDetail} />
                <Route component={NotFound404} />
            </Switch>
            <Footer />
        </Router>
 </MyProvider>
)
   


export default Routes