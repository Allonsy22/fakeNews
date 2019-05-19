<template>
    <v-content>
      <NavBar />
      <Editor />
      <MainSection />
      <Pagination />
      <Footer />
    </v-content>
</template>

<script>
import NavBar from "@/components/NavBar";
import MainSection from "@/components/MainSection";
import Editor from "@/components/Editor";
import Footer from "@/components/Footer";
import Pagination from "@/components/Pagination"

export default {
    name: 'StartPage',
    components: {
    NavBar,
    MainSection,
    Editor,
    Pagination,
    Footer,
  },
}
</script>
