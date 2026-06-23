pipeline {
    agent any

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
                bat 'npm install' 
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
                bat 'npx playwright test tests/api/'
            }
        }

        stage('Execute UI Tests') {
            steps {
                echo 'Running UI Automation Suite...'
                bat 'npx playwright test tests/AmazonCart.spec.js'
            }
        }
    }

    post {
        always {
            echo 'Archiving test results and HTML reports...'
            publishHTML(target: [
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
        }
    }
}