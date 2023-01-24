// Components
import Header from '../components/main/Header/Header'
import Preview from '../components/main/Preview/Preview'
import About from '../components/main/About/About'
import Advantages from '../components/main/Advantages/Advantages'
import Rules from '../components/main/Rules/Rules'
import Video from '../components/main/Video/Video'
import Team from '../components/main/Team/Team'
import Reviews from '../components/main/Reviews/Reviews'
import Contact from '../components/main/Contacts/Contact'
import Footer from '../components/Footer/Footer'
import Menu from '../components/main/Menu/Menu'
// Form
import Form from '../components/Form/Form'
import { Provider } from 'react-redux'
import { setupStore } from '../src/store/store'

// for SSR
import { wrapper } from '../src/store/store'
import { fetchAllTeam, teamAPI } from '../src/team/teamService'
import { contactsAPI, fetchContact } from '../src/contacts/contacts'
import { getReviews, reviewsAPI } from '../src/reviews/reviews'

// SSR for team
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(fetchAllTeam.initiate())
    const [team] = await Promise.all(store.dispatch(teamAPI.util.getRunningQueriesThunk()))

    store.dispatch(fetchContact.initiate())
    const [contacts] = await Promise.all(store.dispatch(contactsAPI.util.getRunningQueriesThunk()))

    store.dispatch(getReviews.initiate())
    const [reviews] = await Promise.all(store.dispatch(reviewsAPI.util.getRunningQueriesThunk()))

    if (team.isError || contacts.isError || reviews.isError){
      return{
        props: {teamError: team.error, contactsError: contacts.error, reviewsError: contacts.error}
      }
    }

    return{
      props: {team: team.data, contacts: contacts.data, reviews: reviews.data}
    }
  }
)

export default function Home({ team, contacts, reviews, teamError, contactsError, reviewsError }) {
  return (
    <div className='component'>
      <Menu />
      <Preview />
      <About />
      <Advantages />
      <Rules />
      {/* <Video /> */}
      <Team team={team} error={teamError}/>
      <Reviews reviews={reviews} error={reviewsError}/>
      <Contact contacts={contacts} error={contactsError}/>
    </div>
  )
}

Home.getLayout = function PageLayout(page) {
  const store = setupStore()
  return (
    <Provider store={store}>
      <Header />
      <Form />
      {page}
      <Footer />
    </Provider>
  )
}