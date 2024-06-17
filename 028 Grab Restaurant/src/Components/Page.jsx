import React, { useState } from "react";

function Page() {
  return (
    <div className="main">
      <h1>Grab Restaurant</h1>
      <div className="Search">
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="menus">
        <div class="card">
          <img
            src="https://food-cms.grab.com/compressed_webp/merchants/3-CZMTKBDTT2XJAJ/hero/65641d0fcdc14d4a8961f56f0ead6fa5_1598847900883974941.webp"
            alt="food"
          />
          <h4 className="titlefood">
            <b>ตี๋เย็นตาโฟรสเด็ด - ศาลาว่าการกรุงเทพฯ</b>
          </h4>
          <p>อาหารตามสั่ง</p>
          <button>Order New</button>
        </div>
        <div class="card">
          <img
            src="https://food-cms.grab.com/compressed_webp/merchants/3-CZMTKBDTT2XJAJ/hero/65641d0fcdc14d4a8961f56f0ead6fa5_1598847900883974941.webp"
            alt="food"
          />
          <h4 className="titlefood">
            <b>ตี๋เย็นตาโฟรสเด็ด - ศาลาว่าการกรุงเทพฯ</b>
          </h4>
          <p>อาหารตามสั่ง</p>
          <button>Order New</button>
        </div>
        <div class="card">
          <img
            src="https://food-cms.grab.com/compressed_webp/merchants/3-CZMTKBDTT2XJAJ/hero/65641d0fcdc14d4a8961f56f0ead6fa5_1598847900883974941.webp"
            alt="food"
          />
          <h4 className="titlefood">
            <b>ตี๋เย็นตาโฟรสเด็ด - ศาลาว่าการกรุงเทพฯ</b>
          </h4>
          <p>อาหารตามสั่ง</p>
          <button>Order New</button>
        </div>
        <div class="card">
          <img
            src="https://food-cms.grab.com/compressed_webp/merchants/3-CZMTKBDTT2XJAJ/hero/65641d0fcdc14d4a8961f56f0ead6fa5_1598847900883974941.webp"
            alt="food"
          />
          <h4 className="titlefood">
            <b>ตี๋เย็นตาโฟรสเด็ด - ศาลาว่าการกรุงเทพฯ</b>
          </h4>
          <p>อาหารตามสั่ง</p>
          <button>Order New</button>
        </div>
        <div class="card">
          <img
            src="https://food-cms.grab.com/compressed_webp/merchants/3-CZMTKBDTT2XJAJ/hero/65641d0fcdc14d4a8961f56f0ead6fa5_1598847900883974941.webp"
            alt="food"
          />
          <h4 className="titlefood">
            <b>ตี๋เย็นตาโฟรสเด็ด - ศาลาว่าการกรุงเทพฯ</b>
          </h4>
          <p>อาหารตามสั่ง</p>
          <button>Order New</button>
        </div>
      </div>
    </div>
  );
}

export default Page;