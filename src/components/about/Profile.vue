<template lang="pug">
  .profile
    .title Profile
    transition(name="fade")
      .box(v-show="isPassedProfile")
        .item
          .matter ♦︎ Screen Name
          .description しろねぎ
        .item
          .matter ♦︎ Date of Birth
          .description 05.30
        .item
          .matter ♦︎ Education
          .description 東京工業大学 2016.4 - 2020.3
        .item
          .matter ♦︎ Major
          .description 心理物理学
        .item
          .matter ♦︎ Likes
          .description お絵かき / ドット絵 / デザイン / ゲーム / 散歩 / VTuber
        .item
          .matter ♦︎ Fav Tech
          .description CSS Animation / AR / Image Processing
        .item
          .matter ♦︎ Certificate
          .description 基本情報処理技術者試験<br>画像処理エンジニア検定 エキスパート
        .item
          .matter ♦︎ Comment
          .description 楽しくて新しい見ための作品を作ったり見たりするのが好き。
        .item
          .matter ♦︎ Links
          .link
            a(href="https://twitter.com/wh_negi" target="_blank" rel="noopener noreferrer") Twitter<br>
            a(href="https://www.pixiv.net/users/21090759" target="_blank" rel="noopener noreferrer") Pixiv<br>
            a(href="https://github.com/w1nnie" target="_blank" rel="noopener noreferrer") Github

</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      appear: "appear",
      disappear: "disappear"
    };
  },
  props: ["scrollY"],
  computed: {
    isPassedProfile() {
      return this.scrollY > 0.5;
    }
  }
};
</script>

<style scoped lang="sass">

@import "@/assets/media.sass"

.profile
  position: relative
  width: 100%
  height: 100%
  color: white
  z-index: 2
  // background: rgba(255,255,255,0.1)

  .title
    font-size: 40px

  .box
    position: absolute
    width: 55%
    height: 78%
    top: 15%
    left: 20%
    display: flex
    flex-direction: column
    background: rgba(0,0,0,0.6)
    box-shadow: 0px 0px 10px rgba(0,0,0,0.6)
    border-radius: 10px
    overflow: scroll
    will-change: transform, opacity

    @media only screen and (max-width: $md)
      width: 77%
      left: 12.5%

    .item
      display: flex
      font-size: 1.3vw
      margin: 0.3rem 0 0.75rem 0.1rem
      border-bottom: 1px dotted rgba(255,255,255,0.3)

      @media only screen and (max-width: $md)
        font-size: 0.6rem

      .matter
        width: 28.5%
        margin-left: 1.5%
        display: flex
        justify-content: start
        align-items: center
        text-shadow: #4455ff 0 0 8px, #4455ff 0 0 15px

      .description
        width: 70%
        display: flex
        justify-content: start
        align-items: center
        text-align: left

      .link
        text-align: left

        a
          color: #88aadd
          text-decoration: none

  .fade-enter-active, .fade-leave-active
    will-change: opacity, transform
    transition: all 1s ease-out

  .fade-enter, .fade-leave-to
    opacity: 0
    transform: translateY(100px)
</style>
