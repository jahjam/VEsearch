import { TIMEOUT_SEC } from './config';

const timeout = function (s = TIMEOUT_SEC) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(
        new Error(
          `Request took too long! Timeout after ${s} second. <br/> Please try again...`
        )
      );
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok)
      throw new Error(`Bad Request: ${data.message} (Status:${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const renderLoadingIcon = function (parentEl) {
  const markup = `
  <div class="dot-pulse">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>`;

  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};

export const renderErrorMsg = function (
  parentEl,
  message = 'Recipe failed to load, try refreshing the page...'
) {
  const markup = `
    <div div class="error">
        <p class="error-msg">
          ${message}
        </p>    
     </div>
`;

  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};
