// 卡券信息表
const mockCouponsMap = [
  {
    id: 'mcdonalds',
    title: '$10',
    brand: 'McDonalds',
    desc: '$10 voucher for McDonalds',
    expires: 'Valid until 01 February 2022'
  },
  {
    id: 'kfc',
    title: '25% OFF',
    brand: 'KFC',
    desc: '25% discount',
    expires: 'Valid until 02 February 2022'
  },
  {
    id: 'starbucks',
    title: '1 Free Coffee',
    brand: 'Starbucks',
    desc: 'buy one get one free',
    expires: 'Valid until 03 February 2022'
  }
]
const coupons = document.querySelector('.coupons');
const couponList = document.querySelector('#coupon-list');
const detailPage = document.querySelector('#detail-page');
const closeBack = document.querySelector('.close-back');

// 获取卡券详细信息
const getCouponDetail = function(id) {
  return mockCouponsMap.find(item => item.id === id) || {};
}

// 卡券详情动态赋值
const setCouponData = function(data) {
  document.querySelector('.coupon-detail .title').innerText = data.title;
  document.querySelector('.coupon-detail .main i').className = `logo ${data.id}`;
  document.querySelector('.coupon-detail .brand').innerText = data.brand;
  document.querySelector('.coupon-detail .desc').innerText = data.desc;
  document.querySelector('.coupon-detail .share .sub-text').innerText = data.expires;
}

coupons.addEventListener('click', function(event) {
  const targetEl = event.target.closest('.coupon-item');
  const id = targetEl.dataset.id;
  const couponDetail = getCouponDetail(id);

  setCouponData(couponDetail);
  // 显示d操作
  couponList.classList.remove('show-from-left');
  couponList.classList.add('hide-to-left');
  detailPage.classList.add('show-from-right');
  detailPage.classList.remove('hide-to-right')
  couponList.addEventListener('animationend', function() {
    document.querySelector('#close-back').style.display = 'flex';
  })
});

// 关闭操作
closeBack.addEventListener('click', function() {
  detailPage.classList.remove('show-from-right');
  detailPage.classList.add('hide-to-right')
  couponList.classList.remove('hide-to-left');
  couponList.classList.add('show-from-left');
  couponList.addEventListener('animationend', function() {
    document.querySelector('#close-back').style.display = 'none';
  })
})