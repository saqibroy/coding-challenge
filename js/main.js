const { createApp } = Vue;

createApp({
    data() {
        return {
            tweets: []
        };
    },
    mounted() {
        this.fetchTweets();
    },
    methods: {
        fetchTweets() {
            // Replace with actual API call
            this.tweets = [
                { id: 1, name: 'User1', text: 'This is a tweet', created_at: '2025-03-07T10:00:00Z' },
                { id: 2, name: 'User2', text: 'This is another tweet', created_at: '2025-03-07T11:00:00Z' }
            ];
        }
    }
}).mount('#app');