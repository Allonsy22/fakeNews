<template>
    <v-content>
      <NavBar />
      <MainSection />
      <Pagination />
      <Footer />
    </v-content>
</template>

<script>
import NavBar from "@/components/NavBar";
import MainSection from "@/components/MainSection";
import Footer from "@/components/Footer";
import Pagination from "@/components/Pagination"

export default {
    name: 'StartPage',
    components: {
    NavBar,
    MainSection,
    Pagination,
    Footer,
  },
}
</script>
