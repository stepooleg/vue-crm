<template>
    <nav class="navbar orange lighten-1">
        <div class="nav-wrapper">
            <div class="navbar-left">
                <a href="#" @click.prevent="$emit('click')">
                    <i class="material-icons black-text">dehaze</i>
                </a>
                <span class="black-text">{{date | dateFilter('datetime')}}</span>
            </div>

            <ul class="right hide-on-small-and-down">
                <li>
                    <a
                        ref="dropdown"
                        class="dropdown-trigger black-text"
                        href="#"
                        data-target="dropdown"
                    >
                        USER NAME
                        <i class="material-icons right">arrow_drop_down</i>
                    </a>

                    <ul id='dropdown' class='dropdown-content'>
                        <li>
                            <router-link to="/profile" class="black-text">
                                <i class="material-icons">account_circle</i>Профиль
                            </router-link>
                        </li>
                        <li class="divider" tabindex="-1"></li>
                        <li>
                            <a href="#" class="black-text" @click.prevent="logout">
                                <i class="material-icons">assignment_return</i>Выйти
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { LOGOUT_WITH_FIREBASE } from '@/store/action-types'
export default {
  name: 'Navbar',
  data: () => ({
    date: '',
    dateInterval: null,
    dropdown: null
  }),
  mounted () {
    this.dateInterval = setInterval(() => {
      this.date = new Date()
    }, 1000)
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true
    })
  },
  beforeDestroy () {
    clearInterval(this.dateInterval)
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }
  },
  methods: {
    async logout () {
      await this.$store.dispatch(LOGOUT_WITH_FIREBASE)
      this.$router.push('/login?message=logout')
    }
  }
}
</script>

<style scoped>

</style>
