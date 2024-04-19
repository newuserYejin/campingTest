import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import CampingListPage from "./pages/CampingListPage/CampingListPage";
import CampingDetailPage from "./pages/CampingDetailPage/CampingDetailPage";
import SearchDataPage from "./pages/SearchDataPage/SearchDataPage";
import EventListPage from "./pages/EventListPage/EventListPage";
import EventList from "./pages/EventList/EventList"
import CampingPage from "./pages/CampingPage/CampingPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/campings">
          <Route index element={<CampingListPage />} />
          <Route path=":contentId" element={<CampingDetailPage />} />
        </Route>
        <Route path='/EventList'>
          <Route index element={<EventListPage />} />
        </Route>
        <Route path="/search">
          <Route index element={<SearchDataPage />} />
          <Route path=":contentId" element={<SearchDataPage />} />
        </Route>
        <Route path="/event">
          <Route index element={<EventListPage />} />
        </Route>
        {/* 아래 /campingdetail -> <CampingPage/>는 detail page 확인을 위해 임의로 만들었습니다. page연결시 지울예정 */}
        <Route path="/campingsdetail">
          <Route index element={<CampingPage />} />
          <Route path=":contentId" element={<CampingDetailPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
