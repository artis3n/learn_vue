<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <form v-if="!isSubmitted">
                        <div class="row">
                            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                                <app-full-name v-model.trim="name"></app-full-name>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                                <label for="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    class="form-control"
                                    placeholder="Email address"
                                    v-model.trim="email">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                                <label for="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Secret"
                                    class="form-control"
                                    v-model.lazy="password">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                                <label for="store">Save Data?</label>
                                <app-switch id="store" v-model="store"></app-switch>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                                <btn class="btn btn-primary" @click.prevent="isSubmitted = true">Submit</btn>
                            </div>
                        </div>
                        <hr>
                    </form>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ name }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }} </p>
                        <p>Store in Database?: {{ store }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from "./components/FullName.vue";
    import Switch from "./components/Switch.vue";

    export default {
        components: {
            appFullName: FullName,
            appSwitch: Switch,
        },
        data() {
            return {
                name: '',
                email: '',
                password: '',
                store: true,
                isSubmitted: false,
            };
        },
    }
</script>

<style>
</style>
