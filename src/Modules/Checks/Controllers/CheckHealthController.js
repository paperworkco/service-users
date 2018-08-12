//@flow

import type {
    TControllerConfig,
    TControllerParams,
    TControllerDependenciesDefinition,
    TControllerActionReturn,
    TControllerRouteAclTable
} from 'paperframe/lib/Controller';

const PaperworkController = require('paperwork-sdk-service-node/lib/PaperworkController');
const PaperworkStatusCodes = require('paperwork-sdk-service-node/lib/PaperworkStatusCodes');

const Joi = require('joi');
const HttpStatus = require('http-status-codes');

module.exports = class CheckHealthController extends PaperworkController {
    static get dependencies(): TControllerDependenciesDefinition {
        return ['database'];
    }

    static get resource(): string {
        return 'checkHealth';
    }

    static get route(): string {
        return '/checks/health';
    }

    async index(params: TControllerParams): TControllerActionReturn {
        return this.return(params, HttpStatus.OK, PaperworkStatusCodes.OK, {});
    }
};
