pipeline {
    agent any

    tools {
        // Looks for a Node.js installation configured in Jenkins Global Tool Configuration
        nodejs 'node' 
    }

    environment {
        // Forces Playwright to use CI-optimized settings
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                bat 'npm ci' 
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                echo 'Downloading required browsers...'
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Execute API Tests') {
            steps {
                echo 'Running API Automation Suite...'
                // Targets only the API test folder specifically
                bat 'npx playwright test tests/api/'
            }
        }

        stage('Execute UI Tests') {
            steps {
                echo 'Running UI Automation Suite...'
                // Targets the specific UI test file or folder
                bat 'npx playwright test tests/AmazonCart.spec.js'
            }
        }
    }

    post {
        always {
            echo 'Archiving test results and HTML reports...'
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
        }
    }
}