module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      asdfghjkl: ['Montserrat', 'sans-serif'],
    },
    
    extend: {
      backgroundImage: {
       FBSBanner: "url(/dist/img/fbs-banner-bg.png)",
        offerbg: "url(/dist/img/whatoffer.jpg)",
        bgsvg: "url(/dist/img/bg3.svg)",
        quoteleft: "url(/dist/img/quote-left.svg",
        quoteright: "url(/dist/img/quote-right.svg",
      },
      colors:{
        dark:"#2b2b2b",
        light:"#ffffff",
        redz: "#e64737",
        lightredz: "#ff4041",
        fbscolor: "#6a103f",
        primary: "#6a103f",
      }
    },
  },
  plugins: [],
}