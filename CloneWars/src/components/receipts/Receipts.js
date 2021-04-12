import React from "react";
import ModeHeader from "../modeHeader";
import CategoriesList from './CategoriesList';
import CategoryList from './CategoryList';
import RecentsList from './RecentsList';

function Receipts() {

  return (
    <div id='receipts' className='receipts'>
      <ModeHeader mode={ 'receipts' }/>
      <div className="content" >
        <CategoriesList />
        <CategoryList />
        <RecentsList />
      </div>
    </div>
  );
}
export default Receipts;