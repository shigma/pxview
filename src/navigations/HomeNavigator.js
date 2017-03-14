import { StackNavigator } from 'react-navigation';
import Home from '../containers/Home';
import Detail from '../containers/Detail';
import UserDetail from '../containers/UserDetail';
import IllustComment from '../containers/IllustComment';
import UserIllust from '../containers/UserIllust';
import UserManga from '../containers/UserManga';
import UserBookmarkIllust from '../containers/UserBookmarkIllust';
import RelatedIllust from '../containers/RelatedIllust';
import SearchResultTabs from '../containers/SearchResultTabs'; //todo


const HomeNavigator = StackNavigator({
  Home: { 
    screen: Home,
    navigationOptions: {
      header: {
        visible: false
      }
    },
  },
  Detail: { 
    screen: Detail,
  },
  UserDetail: {
    screen: UserDetail,
  },
  IllustComment: {
    screen: IllustComment,
    navigationOptions: {
      title: 'User Comments',
    },
  },
  RelatedIllust: {
    screen: RelatedIllust,
    navigationOptions: {
      title: 'Related Works',
    },
  },
  UserIllust: {
    screen: UserIllust,
    navigationOptions: {
      title: 'User Illusts',
    }
  },
  UserManga: {
    screen: UserManga,
    navigationOptions: {
      title: 'User Mangas',
    }
  },
  UserBookmarkIllust: {
    screen: UserBookmarkIllust,
    navigationOptions: {
      title: 'Collection',
    }
  },
  SearchResult: {
    screen: SearchResultTabs,
  }
}, {
  navigationOptions: {
    header: {
      style: {
        backgroundColor: '#fff'
      }
    }
  },
  cardStyle: {
    backgroundColor: '#fff'
  },
  headerMode: 'screen',
});

export default HomeNavigator;