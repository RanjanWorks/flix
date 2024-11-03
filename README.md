# Flix

Flix is a movie discovery and streaming platform built using React, designed to provide a seamless browsing and streaming experience. It includes an intuitive interface for exploring movies, searching titles, and previewing detailed movie information. This project integrates various advanced features like dynamic metadata for SEO, a responsive UI, and interactive search options.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Dynamic Movie Metadata**: Uses Helmet to update title and metadata for SEO, adapting to individual movie pages.
- **Search with Autocomplete**: Real-time search with suggestions using the MovieDB API for accurate results.
- **Download Confirmation Dialog**: Provides a confirm dialog before redirecting to external download links.
- **Responsive Movie Carousel**: A visually engaging carousel for showcasing popular movies.
- **Optimized Loading Skeleton**: Uses `react-loading-skeleton` for a smooth loading experience.
- **Share API Integration**: Easily share movie pages with metadata ready for platforms like Facebook and Twitter.
- **Warnings and Validations**: Alerts users if they attempt to search without a keyword and provides clear feedback.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) as the package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RanjanWorks/flix.git
   cd flix
