'use strict'

// #region DECLARATIONS

// Platform Dependencies
const os = require('os')

// External Dependencies
const gulp = require('gulp')
const bump = require('gulp-bump')
const git = require('gulp-git')

// Variables
const PADDING = 120
let packageInfo = require('./package') // Not declared as a const as it may be refreshed/updated durung build
const rootFolder = './'
// #endregion

// #region INITIALIZATION

/**
 * Log infos to console
 */
const logInfos = (done) => {
  try {
    console.info(''.padEnd(PADDING, '*'))
    console.info(''.padEnd(PADDING, ' '))
    console.info('- APPLICATION '.padEnd(PADDING, '-'))
    console.info((' * DESCRIPTION: ' + packageInfo.description).padEnd(PADDING, ' '))
    console.info((' * VERSION: ' + packageInfo.version).padEnd(PADDING, ' '))
    console.info(''.padEnd(PADDING, ' '))
    console.info('- SYSTEM '.padEnd(PADDING, '-'))
    console.info((' * HOSTNAME: ' + os.hostname().toLocaleUpperCase()).padEnd(PADDING, ' '))
    console.info((' * TYPE: ' + os.type().toLocaleUpperCase()).padEnd(PADDING, ' '))
    console.info((' * RELEASE: ' + os.release().toLocaleUpperCase()).padEnd(PADDING, ' '))
    console.info((' * ARCHITECTURE: ' + os.arch().toLocaleUpperCase()).padEnd(PADDING, ' '))
    console.info((' * PLATFORM: ' + os.platform().toLocaleUpperCase()).padEnd(PADDING, ' '))
    console.info((' * UPTIME: ' + os.uptime()).padEnd(PADDING, ' '))
    console.info(''.padEnd(PADDING, ' '))
    console.info(''.padEnd(PADDING, '*'))
    done()
  } catch (err) { // Unexpected error
    console.error('Unexpected error logging infos', MODULE_TAGS, err)
    done()
  }
}

// #endregion INITIALIZATION

// #region PUSH

// Update package build version using the "Bump" package
const bumpPackageJson = (done) => { // eslint-disable-line no-unused-vars
  gulp.src([rootFolder + 'package.json'])
    .pipe(bump({ type: 'patch' }))
    .pipe(gulp.dest(rootFolder)).on('end', () => {
      // Clear package from cache
      delete require.cache[require.resolve(rootFolder + 'package.json')]
      packageInfo = require(rootFolder + 'package.json')
      done()
    })
}

const commitChanges = (done) => {
  return gulp.src('.')
    .pipe(git.add())
    .pipe(git.commit('build: v' + packageInfo.version)).on('end', () => {
      done()
    })
}

const pushToMaster = (done) => {
  git.push('origin', 'master', done)
}

// #endregion PUSH


// #region EXPORTS

exports.infos = gulp.series(
  logInfos
)
exports.build = gulp.series(
  logInfos
)
exports.push = gulp.series(
  logInfos,
  bumpPackageJson,
  commitChanges,
  pushToMaster
)

// #endregion EXPORTS
