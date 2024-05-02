import React from 'react'
import Example from './Appbar';
import img1 from "../img/img13.jpeg"
import Form from "./form"
import Bottomnav from './bottomnav';


function Home() {
  return (
    <div >
      <Example />
      <div className="relative">
        <img
          src={img1}
          alt="Main Image"
          className="w-full h-auto md:h-full h-screen"
        />
        <div className="absolute top-1/4 left-0 right-0 flex flex-col items-center">
          <p className="text-white text-3xl font-raleway text-center md:text-4xl mb-4">
            Transform your mind and body with our 21-day wellness program. <br />
            Join our community and unlock your limitless<br /> potential today!
          </p>
          <button className="bg-button text-white font-bold py-2 px-4 rounded md:hidden">
            Register Now
          </button>
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/1db9/0aa9/768b5d28108130e70854ba6ddf3c6762?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l1LSsfAS1ZQRyr0~qNBcuK7Ub61KFazjt-RBeiVEjUIdlgGjmWO4E-E~-utSKqWsXg9~KP36inPNcAnCx54xbN6gJlsVw9rJo5bpKUB~waquhS1-Qg9Ho7wNG7Po1hcwxZoupXIEaxg2BJ7OP4IUBj1jgA3-iUWQebqudUmX28wgWJk6sBzsSCEBgxyPGU~Ie~LrmDx6rXshRYN9Xs9sPcQGWfXpZfI71OZceSRbXuvAxPEwzQSPaBB7obak10jRMyX370T2KE3S7LPnd0~XSj9YIFZZS4s50XmruZIq3eEaxaqnXqKhWcUcjXMmcs0LfTGAyra6h2QPPtKk3uD5-g__"
          alt="Overlay Image"
          className="absolute bottom-0 w-1/4 h-auto transform -translate-x-1/2 left-1/2 hidden md:block"
        />
      </div>

      {/* first section is completed */}


      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Mobile View */}
        <div className="sm:hidden bg-yellow-400 rounded-full p-2 sm:p-0 sm:m-4 border border-yellow-200">
          <img
            src="https://s3-alpha-sig.figma.com/img/f0f2/0aa2/8ad549cc0df6c1cd29ae17c7e2a62c3f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jklKwrGMva11LDelYu1ST5nTnTdufuojET562V0iJl3OlurJqExtw4rA1620j5vsQ-rppzCK351bs2UKqySDxf5si~-Ks0995HKlYKPxfzxWS0hCE8jfWPJlV2MrfvTnwWXXnqwmKSOZtn~2wVI5zbKvObMv8Xdc4oy0XWnoKS2arW323gdUBcQXB~vsvtJACvetYnhMWMNOuUZRQuGu5~GWJIYOkWgx3mtBsCSlHyIYZuMq1kXGfnK4SSx-oayGlatMns2XNJiYImJda1dd9T46KmyD4z8LOazr7-0VAFUegV9TUyIeG8s28gKhmIt9Rq2rp5pHEx5u4RmQzQb~oQ__"
            alt="Main Image"
            className="rounded-full w-32 h-32"
          />
        </div>
        <p className="text-center md:text-left" style={{ marginBottom: '1rem', marginRight: '1rem' }}>
          <span className="text-orange-500 font-raleway text-2xl">THE SECRET TO MIND BLOWING MORNINGS!</span><br />
          Start the day with engaging your body physically, mentally and spiritually.
        </p>

        {/* Desktop View */}
        <div className="hidden sm:block bg-yellow-400 rounded-full p-2 sm:p-0 sm:m-4 border border-yellow-200">
          <img
            src="https://s3-alpha-sig.figma.com/img/f0f2/0aa2/8ad549cc0df6c1cd29ae17c7e2a62c3f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jklKwrGMva11LDelYu1ST5nTnTdufuojET562V0iJl3OlurJqExtw4rA1620j5vsQ-rppzCK351bs2UKqySDxf5si~-Ks0995HKlYKPxfzxWS0hCE8jfWPJlV2MrfvTnwWXXnqwmKSOZtn~2wVI5zbKvObMv8Xdc4oy0XWnoKS2arW323gdUBcQXB~vsvtJACvetYnhMWMNOuUZRQuGu5~GWJIYOkWgx3mtBsCSlHyIYZuMq1kXGfnK4SSx-oayGlatMns2XNJiYImJda1dd9T46KmyD4z8LOazr7-0VAFUegV9TUyIeG8s28gKhmIt9Rq2rp5pHEx5u4RmQzQb~oQ__"
            alt="Main Image"
            className="rounded-full md:w-64 md:h-64"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Desktop View */}
        <div className="hidden sm:block bg-yellow-400 rounded-full p-2 sm:p-0 sm:m-4 border border-yellow-200">
          <img
            src="https://s3-alpha-sig.figma.com/img/d19e/d7bd/0de679b2e148d524c408b715d96e4981?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aymlH8-mm62lIpd8c6kuaOICse9GS0Vimy3lsSQkBiYCT3Hr6TNFCn8l3VkhgRf9i9Bg2-vvgkUxhi2cObFoLHooAfuNSTVd5BEKfq2Va7y45lDISD9ZUwEyA6JV4KNO7fwa9Ryu9bmSscmsxyRdBUtJHY5ejtGfjQ-vEuleUJcQJoYeimbAArTRo0YFDchsS69nf1BwqE7~btUHI63u54xB5bsTX4uB093XlHKWy9sy5CtDn-1DrRe0YmcltwaibKWdEllIB~fwIODssdsDaNmF~5OTPHZ6mxKeKvL9SsL0-p3YkD5Qtau513GrCS4HbDWi9ibCqwy7nlUdgjGVjw__"
            alt="Main Image"
            className="rounded-full md:w-64 md:h-64"
          />
        </div>
        <p className="text-center md:text-left" style={{ marginBottom: '1rem', marginLeft: '1rem' }}>
          <span className="text-orange-500 font-raleway text-2xl">Warm-up your body within an hour!</span><br />
          Dynamic warm ups<br />
          Spirited Yoga asanas<br />
          Effective physical exercises<br />
          Whole body engaging movements  </p>

        {/* Mobile View */}
        <div className="sm:hidden bg-yellow-400 rounded-full p-2 sm:p-0 sm:m-4 border border-yellow-200">
          <img
            src="https://s3-alpha-sig.figma.com/img/d19e/d7bd/0de679b2e148d524c408b715d96e4981?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aymlH8-mm62lIpd8c6kuaOICse9GS0Vimy3lsSQkBiYCT3Hr6TNFCn8l3VkhgRf9i9Bg2-vvgkUxhi2cObFoLHooAfuNSTVd5BEKfq2Va7y45lDISD9ZUwEyA6JV4KNO7fwa9Ryu9bmSscmsxyRdBUtJHY5ejtGfjQ-vEuleUJcQJoYeimbAArTRo0YFDchsS69nf1BwqE7~btUHI63u54xB5bsTX4uB093XlHKWy9sy5CtDn-1DrRe0YmcltwaibKWdEllIB~fwIODssdsDaNmF~5OTPHZ6mxKeKvL9SsL0-p3YkD5Qtau513GrCS4HbDWi9ibCqwy7nlUdgjGVjw__"
            alt="Main Image"
            className="rounded-full w-32 h-32"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Mobile View */}
        <div className="sm:hidden bg-yellow-400 rounded-full p-2 sm:p-0 sm:m-4 border border-yellow-200">
          <img
            src="https://s3-alpha-sig.figma.com/img/0241/b13b/69e95449ab4adc37a5c803391110edad?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KXHYXkLlcLZK2sWrCNSFqHIc3Yjo~bTZEK2FxF0768DeE3h~pPjHHfWbSuwpc4MkZetuEMiy12F~uksd~~6UASpZSWTt2nbMoBznhL1aaW7yDV3vRWM5oyXnzgteXaTD-olnDF4J2vnn8DR7Bbkrhp-l3KnqX3SfZYvNWKj8ogYX4Y9LgHS9PBg684ZFHXaxok~l8FicGQruPaAa-qkcoygUIwWc-7ze9i4W4lkpWLrXGx-6EPbGOXYG1aTaIkSbvk-tbRRjJlwGOqBs82qI-FMdRQz3szhv2N4Nw2oAcICtgw6P-Dn~Q6APAlDYp-f64n2sCUhzvDwstksM4UA69A__"
            alt="Main Image"
            className="rounded-full w-32 h-32"
          />
        </div>
        <p className="text-center md:text-left" style={{ marginBottom: '1rem', marginRight: '1rem' }}>
          <span className="text-orange-500 font-raleway text-2xl">WE ARE INVESTED IN YOUR SUCCESS!</span><br />
          We prioritise your well-being and promise to provide you with <br />a healthy lifestyle and empower you with a successful <br />morning routine  </p>

        {/* Desktop View */}
        <div className="hidden sm:block bg-yellow-400 rounded-full p-2 sm:p-0 sm:m-4 border border-yellow-200">
          <img
            src="https://s3-alpha-sig.figma.com/img/0241/b13b/69e95449ab4adc37a5c803391110edad?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KXHYXkLlcLZK2sWrCNSFqHIc3Yjo~bTZEK2FxF0768DeE3h~pPjHHfWbSuwpc4MkZetuEMiy12F~uksd~~6UASpZSWTt2nbMoBznhL1aaW7yDV3vRWM5oyXnzgteXaTD-olnDF4J2vnn8DR7Bbkrhp-l3KnqX3SfZYvNWKj8ogYX4Y9LgHS9PBg684ZFHXaxok~l8FicGQruPaAa-qkcoygUIwWc-7ze9i4W4lkpWLrXGx-6EPbGOXYG1aTaIkSbvk-tbRRjJlwGOqBs82qI-FMdRQz3szhv2N4Nw2oAcICtgw6P-Dn~Q6APAlDYp-f64n2sCUhzvDwstksM4UA69A__"
            alt="Main Image"
            className="rounded-full md:w-64 md:h-64"
          />
        </div>
      </div>
      <div className="bg-button md:flex">
        <div className="md:w-1/2 p-4 flex justify-center items-center">
          <div className="rounded-full overflow-hidden w-72 h-72 md:w-96 md:h-96 sm:w-48 sm:h-48">
            <img
              src="https://s3-alpha-sig.figma.com/img/20e4/d70c/65551696faa3e56c27aa2841331da33f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=molK7B6rRk1rZInSTrWldiUoooqFt~On14IGRdmqiAANi0KYT7OaAE9nQksOwzWHxoyRg17f~YXdYYn7YSdRAUBSs5D-Wq8HvGXvEZMwVO4B0r8DM9ITSCuHZxsphAbPOVR9K8JsnqXDKY0icgcrN95mzLJdZl0I7lMBJNQEzz22qZbOg65vGDRZpWzAzqa9jbXcmFALn-ycEHaVAORBm27~A19i-wKNXj2W8fOJhC2yszRXBtXHuEf9gG83SAYNDh0kCZaL-lRxqKrO-a4a2bknCzIzk~fi~yJelsDVIgtansqKHftEGsDHWge7gh4TsmmcAfVqBsPpyxjud6pSQw__"
              alt="Mindblowing Mornings"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-4">
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">WHAT IS MINDBLOWING MORNINGS?</h2>
            <p className="mb-4">We are a wellness program dedicated to helping individuals discover their inner potential and live a healthy lifestyle. Our program is led by a team of knowledgeable and passionate instructors. We aim to provide physical, mental and emotional benefits through daily yoga, meditation and breathing practices.</p>

            <h2 className="text-2xl font-bold mb-4">THE 21/90 RULE</h2>
            <p className="mb-4">The formula to win is simple yet consistency plays the keys role, we are here with a formula that never fails if we continue to thrive and put our efforts with passion. We are here to move you with goal driven attitude but with natural flow not making it a military training but a training that sustains and motivates you to keep working within time. Guided by professionals and motivating you with necessary understanding of habit nurturing.</p>

            <h2 className="text-2xl font-bold mb-4">OUR MISSION</h2>
            <p className="mb-4">In today's fast-paced world, the rat race is not normal. We don't even identify ourselves with the damage we do to ourselves. To address this cause and the importance of waking up early is our major agenda. In a way, it does feel like an accomplishment whenever you're able to get up early. You can get started on what you need to do, and hopefully be done early to enjoy the rest of your day. In that sense, waking up early is not only a win psychologically but also a win physically.</p>
          </div>
        </div>
      </div>


      {/* third completed */}
      <br /><br />

      <div className="flex justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-orange-500">Our Instructors</h1>
          <p className="mt-2">Experienced professionals in the field who can change your life!</p>
        </div>
      </div>
      <br /><br />

      <div className="flex flex-col items-center justify-center md:flex-row">
        <img
          src="https://s3-alpha-sig.figma.com/img/234e/4e1a/6a4d277d247dfa3901e2639040c2f81b?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qfMv-WSaSvV8ptGSMY1QhYdjkN6Md~cyhLeQRnSxr6EH~B4tQe5PduxrNG3Be9XiIl5TaKb4sDYmMB1DhE0suxi9e7stMRCYLVuKfBLgiXC7ihsgIZ9zl-I7O5cU2Eb1UTSKu9CELOm3Lv1Up8CJyYcCBOfAHZseCVptBu7iXfrKyhSc9eQzIO1~2LDzsB25zI06UCj0srlIbJrhAA2sJxwusnW~HgRlkPG5~iTHe~JuX5hZP785geqh7W-su4Dh23T9SyxKXsR1YGfYNyYX8vC2lpCN8Kco9y8AusiHmp70soOiiOuS8RAaK~~0GDw1FkyFHkUCTVwCsFJqHCAvHA__"
          alt="Instructor"
          className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-4"
        />
        <div className="text-center md:text-left">
          <p>
            Mandar is a highly knowledgeable and certified Yoga <br />Instructor, deeply devoted to yoga and the art of teaching.<br /> His
            expertise extends beyond yoga itself, encompassing <br />various habits that contribute to creating an optimal<br /> morning
            routine. Mandar takes immense pleasure in<br /> instilling positivity and enriching the lives of others<br />through his
            teachings.
          </p>
        </div>
      </div>
      <br /><br /><br />
      <div className="flex justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-orange-500">Our happy clients say about us</h1>
          <p className="mt-2">2,157 people have said how good Mind blowing mornings</p>
        </div>
      </div>

      <br /><br />

      <div className="flex flex-wrap justify-center gap-4">
        <img src="https://s3-alpha-sig.figma.com/img/77bd/267d/b88c939f2151246820aadf34fc503ec0?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NAe1uIAjB-Tq8zc08nav67VmCKoPoSfh2shS-pPsrcbp~jWNJ3WbopbPY9HRH8aJ7XkM0E6fX8nFBvDAiVgvxIBQ2Od9ew-hA53LwDBuggf3kI1ctaWQo5o6T8HF~nIMp75N05-Gif4Pok--d2f324vJtIQZr8WFfHucDULoW2iNkMnX9gu~LwnOghhK0OWDvCU5Z~eU3yiB5dFuJum6pKAAQPnzlY3DbNGnwS52cA7Edq0WdndIeHHGq5895P02xfhw65OKv9TZqksus9G-wmiHl~R1idpU1861lv63CNJLGWtUh8lnC5g2HCCETNrXQbvSlgv0jXomQnMem9l-9w__" alt="Image 1" className="max-w-full h-auto sm:max-w-none sm:w-1/2 lg:w-1/4" />
        <img src="https://s3-alpha-sig.figma.com/img/6e32/c13e/0a5ff5fb556b1511bb97adc357eb35eb?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K2P9B03UXls3XoImBxl9zpcDkzkFrMrxboc3LGRqMUtuh-dGFEGS-uDaleKwZSznFhLxUEpfj36tTZPPVjhmBS3~cxEgeQW4kIiHqCooUkYazOkU~R33viBxIcRCyEPQq4Px3xO91ZXxbof6sIEpr7Jyk~0zL9Y~XgGb2ChijDlI3Wh3aaba2XB75HETB5~vkV593X9HBbZaxRjiGJXbLIHVq0JNknNrWtOknHsrFnk2qlpg9h3U3WYnaGqQPEALJq-5xwAueua8wLoWA581N6m90NAhMwSL2DuZbKZJCUH~lfjDfJ2baR6-MIHSMR9RIM-1oHGfSd325n5BGHE79Q__" alt="Image 3" className="max-w-full h-auto sm:max-w-none sm:w-1/2 lg:w-1/4" />
        <img src="https://s3-alpha-sig.figma.com/img/33d8/cb68/0b751457696f8987096fd2ee31c3ad3f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xqe6bfToUIHxC1vvoY6vg2M0BH3tvrM6--YZKpTL5j47XdD4jIF6mAHhGZ36pE1cfSKa~yyGAJFEaCSPvgGDNavK2txt3kebYmtAGU-D2N~clVEWkWPVXyeGUJ6m8vIWUXE7UA3NuxpAxHbQjw0sMIPBsUG1kidOgEi0nMmnkZUFeCVpIoDqZd6fO8CcWMN0YI5OafvLl6kH-iKqh~YQPO9bM~z4rb17m7781AWnv-uBuz9KfetC8LNRc9mW5QFsczzPoPHBPYG6iOpltw4IdzoEeOjlJRfEQJqmy5uVpdWbcle2XDBaTNdIpdR3~4gy-roW~tm9QM8EXbe3rF89fQ__" alt="Image 2" className="max-w-full h-auto sm:max-w-none sm:w-1/2 lg:w-1/4" />
        <img src="https://s3-alpha-sig.figma.com/img/92e9/751f/0ba480ead0ea2ee5be515b9c689487a6?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKm6BqGDW8~WK4~m8wBrAXanBxdeK0jRctEebXPsNiYXBre26tkGfKgws~5pgyA87BL5d6o3MkqPGzC4-cRNsc-v1sSTPbnJCUXSK0xCFj3XrXnTqz41fqir9AzFbaRF~aHJwBkeltnvaWh-yhH5Ee0ZRomlpJadfQtf~ycx2S5D1joE8FrsUmeiXARGRkFLY9n-tlkQGVV6w6D7xT-j6Cy78FzG925IwdV6fuFbreoGZY1uGkOG3NYNO7a9iVkz3kuAPQB3lGLC9m-wIPWxUFjOwYoUOjtOB3KJ5EP8Q0H7DgYHDgt5nM174dZFv5lwd~GYOGBGj53AGuReH-0Lgw__" alt="Image 4" className="max-w-full h-auto sm:max-w-none sm:w-1/2 lg:w-1/4" />
        <img src="https://s3-alpha-sig.figma.com/img/96d6/43d4/64f772d180de249782171c26bfa13329?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fAzJS4JlV0cn3YLPj~EHwQVEtXtdjNnAfWGQrwFU3BZ5xELlSGxZcA7s82-X2GDfNKRuk2EgPalS1J6lcP4dVyQO9iUU5bEZ43-Mo6J5KSgJYW04d4Xpg6LpjF48HyzvD9PwecL1mGU5WR6Q2HpuJu65nxhyPQqaItnuwkSzX-SEtObrbFoh6oSw-2GpftpVXNtK4tjmkIFMkVcBe0vN4CJC5PB26TtBf3Qy5QF4Ql8V0qIKLRKO9hR6oVMI-P3~dnZEWssT0ZXALVrekIkq35Dl92XnxHQjfa3fYlHCO6rK8r0aadDgRfNbPmNj3lHH961F-KhLSkVVkS1rOlXZSQ__" alt="Image 4" className="max-w-full h-auto sm:max-w-none sm:w-1/2 lg:w-1/4" />
      </div>

      <Form />
      <br />
      <Bottomnav />
    </div>
  )
}

export default Home