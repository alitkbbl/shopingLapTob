import React from 'react'
import FooterHead from './FooterHead'
import ContaFooter from './ContaFooter'

export default function Footer() {
  return (
    <div>
      <br />
      <br />
      <footer className="bg-slate-800 text-white py-10 ">
        <FooterHead />
        <br />
        <br />
        <hr />
        <br />
        <br />
  <div className='flex justify-between'>
    <ContaFooter />
  <div className="container grid lg:grid-cols-5 gap-1">
    <div>
      <h2 className="font-bold text-xl mb-2">قوانین و مقررات</h2>
      <ul className='text-sm'>
        <li><a href="#">قوانین و مقررات</a></li>
        <li><a href="#">حریم خصوصی کاربران</a></li>
        <li><a href="#">از زبان مشتریان تکنولایف</a></li>
        <li><a href="#">چرا تکنولایف؟</a></li>
      </ul>
    </div>
    <div>
      <h2 className="font-bold text-xl mb-2">پس از خرید</h2>
      <ul className='text-sm'>
        <li><a href="#">تضمین رجیستری</a></li>
        <li><a href="#">رویه‌های بازگرداندن کالا</a></li>
        <li><a href="#">سوالات متداول رجیستری</a></li>
        <li><a href="#">رهگیری سفارش‌ها</a></li>
      </ul>
    </div>
    <div>
      <h2 className="font-bold text-xl mb-2">پیش از خرید</h2>
      <ul className='text-sm'>
        <li><a href="#">راهنمای خرید اقساطی</a></li>
        <li><a href="#">خرید مطمئن از تکنولایف</a></li>
        <li><a href="#">راهنمای خرید از تکنولایف</a></li>
        <li><a href="#">ضمانت‌های متنوع تکنولایف</a></li>
        <li><a href="#">شیوه‌های پرداخت</a></li>
      </ul>
    </div>
    <div>
      <h2 className="font-bold text-xl mb-2">درباره ما</h2>
      <ul className='text-sm'>
        <li><a href="#">تکنولایف در یک نگاه</a></li>
        <li><a href="#">اهداف و تعهدهای ما</a></li>
        <li><a href="#">سوالات متداول</a></li>
        <li><a href="#">فروشگاه های حضوری</a></li>
        <li><a href="#">تماس با ما</a></li>
      </ul>
    </div>
    <div>
      <h2 className="font-bold text-xl mb-2">دسترسی سریع</h2>
      <ul className='text-sm'>
        <li><a href="#">بلاگ</a></li>
        <li><a href="#">خرید گوشی</a></li>
        <li><a href="#">گوشی سامسونگ</a></li>
        <li><a href="#">گوشی آیفون</a></li>
        <li><a href="#">گوشی شیائومی</a></li>
        <li><a href="#">گوشی پوکو</a></li>
      </ul>
    </div>
  </div>
</div>
  <br />
</footer>

    </div>
  )
}
