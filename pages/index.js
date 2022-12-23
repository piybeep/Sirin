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

import { contactsAPI, fetchContact } from '../src/contacts/contacts'
// for SSR
import { fetchAllTeam, teamAPI } from '../src/team/teamService'
import { wrapper } from '../src/store/store'

// SSR for team
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(fetchAllTeam.initiate())
    const data = await Promise.all(store.dispatch(teamAPI.util.getRunningQueriesThunk()))

    store.dispatch(fetchContact.initiate())
    const contacts = await Promise.all(store.dispatch(contactsAPI.util.getRunningQueriesThunk()))

    return {
      props: { team: data[0].data, contacts: contacts[0].data }
    }
  }
)

export default function Home({ team, contacts }) {
  return (
    <div className='component'>
      <Menu />
      <Preview />
      <About />
      <Advantages />
      <Rules />
      {/* <Video /> */}
      <Team team={team} />
      <Reviews />
      <Contact phoneOne={contacts[0].data} phoneTwo={contacts[1].data} email={contacts[2].data} />
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