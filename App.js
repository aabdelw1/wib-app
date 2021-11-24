import React from 'react';
import { ActivityIndicator } from 'react-native';
import ApolloClient from "apollo-boost";
import { Query, ApolloProvider } from 'react-apollo'
import Queries from './graphql/queries'
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs'
import RootStackScreen from './screens/RootStack/RootStackScreen'

export const AppContext = React.createContext({ data: { oneUser: null } });
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const users = {
  ammar: "617c0d453cd87c218cb1cfd8"

}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Query query={Queries.ONE_USER} variables={{ _id: users.ammar }}>
        {({ loading, error, data }) => {
              if (loading || error) return <ActivityIndicator size="large" color="#0000ff" />
              return (
                <AppContext.Provider value={{...data.oneUser}} style={styles.container}>
                  
                  <NavigationContainer>
                    {/* <Tabs/> */}
                    {/* <RootStackScreen/> */}
                  </NavigationContainer>
                </AppContext.Provider>
              )
            }}
      </Query>
    </ApolloProvider>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',

  }
};