/* global APP */
import AbstractOverlay from './AbstractOverlay';

/**
 * Implements an abstract React Component for overlay with ability to
 * reload the page.
 */
export default class AbstractReloadableOverlay extends AbstractOverlay {
    /**
     * Reloads the page.
     *
     * @returns {void}
     * @protected
     */
    _reconnectNow() {
        // FIXME: In future we should dispatch an action here that will result
        // in reload.
        APP.ConferenceUrl.reload();
    }
}
