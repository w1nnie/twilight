<template lang="pug">
  .profile
    .box
      .item
        .matter ♦︎ Screen Name
        .description 白葱 / うぃにおん
      .item
        .matter ♦︎ Date of Birth
        .description 1997.05.30
      .item
        .matter ♦︎ Education
        .description 東京工業大学 2016.4 - 2020/3<br>東京工業大学大学院 2020.4 -
      .item
        .matter ♦︎ Hobby
        .description お絵かき / ドット絵 / デザイン / 音楽鑑賞 / 散歩 / ゲーム / 写真
      .item
        .matter ♦︎ Fav Tech
        .description CSS Animation / AR / Image Processing
      .item
        .matter ♦︎ Certificate
        .description 基本情報処理技術者試験<br>画像処理エンジニア検定 エキスパート
      .item
        .matter ♦︎ Links
        .link
          a(href="https://twitter.com/_winnie_ill") Twitter<br>
          a(href="https://www.pixiv.net/users/21090759") Pixiv<br>
          a(href="https://github.com/w1nnie") Github

</template>

<script>
export default {
  name: "Profile",
  data() {
    return {};
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
  // background: rgba(255,255,255,0.1)

  .box
    position: absolute
    width: 43%
    height: 70%
    top: 15%
    left: 5%
    display: flex
    flex-direction: column
    background: rgba(0,0,0,0.2)
    box-shadow: 8px 8px 10px rgba(0,0,0,0.2), -8px -8px 10px rgba(0,0,0,0.2)

    @media (max-width: $md)
      width: 77%

    .item
      display: flex
      font-size: 1.3rem
      margin: 0.3rem 0 0.75rem 0.1rem
      border-bottom: 1px dotted rgba(255,255,255,0.3)

      @media (max-width: $md)
        font-size: 0.3rem

      .matter
        width: 32%
        display: flex
        justify-content: start
        align-items: center
        text-shadow: #4455ff 0 0 8px, #4455ff 0 0 15px

      .description
        width: 68%
        display: flex
        justify-content: start
        align-items: center
        text-align: left

      .link
        height: 12vh
        text-align: left

        a
          color: #88aadd
          text-decoration: none
</style>
