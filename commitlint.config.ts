type ParsedRegexType = {
  ticket: string;
  dev: string;
  desc: string;
};

module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: new RegExp(
        '^' +
          /(\[[\w-]+\]\s)/.source +
          /(<[A-Za-z\s]+>\s)/.source +
          /(.+)/.source +
          '$'
      ),
      headerCorrespondence: ['ticket', 'dev', 'desc'],
    },
  },
  plugins: [
    {
      rules: {
        'header-match-team-pattern': (parsed: ParsedRegexType) => {
          const { ticket, dev, desc } = parsed;
          if (ticket === null || dev === null || desc === null) {
            return [
              false,
              'Commit must be in format [TicketNumber] <Author> Some description',
            ];
          }
          return [true, ''];
        },
      },
    },
  ],
  rules: {
    'header-match-team-pattern': [2, 'always'],
  },
};

export {};
