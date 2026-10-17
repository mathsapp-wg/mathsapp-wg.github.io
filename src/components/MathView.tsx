import React, { useMemo } from 'react';
import katex from 'katex';

interface MathViewProps {
  content: string;
  className?: string;
  block?: boolean;
}

/**
 * Parses a string that contains LaTeX math delimited by:
 * - $$ ... $$ for display/block math
 * - $ ... $ for inline math
 * and renders KaTeX spans or plain text.
 */
export const MathView: React.FC<MathViewProps> = ({ content, className = '', block = false }) => {
  const renderedHtml = useMemo(() => {
    if (!content) return '';

    try {
      // If block prop is set and the entire content doesn't have delimiters, render directly as math
      if (block && !content.includes('$')) {
        return katex.renderToString(content, {
          displayMode: true,
          throwOnError: false,
        });
      }

      // Regex matching $$...$$ (block) or $...$ (inline)
      // We will parse tokens
      let result = '';
      let remaining = content;

      while (remaining.length > 0) {
        // Look for display math $$
        const doubleDollarIndex = remaining.indexOf('$$');
        const singleDollarIndex = remaining.indexOf('$');

        if (doubleDollarIndex !== -1 && (singleDollarIndex === -1 || doubleDollarIndex <= singleDollarIndex)) {
          // Add plain text before $$
          result += escapeHtml(remaining.substring(0, doubleDollarIndex));
          const closingIndex = remaining.indexOf('$$', doubleDollarIndex + 2);

          if (closingIndex !== -1) {
            const math = remaining.substring(doubleDollarIndex + 2, closingIndex);
            try {
              result += `<span class="math-display my-2 block overflow-x-auto">${katex.renderToString(math, {
                displayMode: true,
                throwOnError: false,
              })}</span>`;
            } catch (err) {
              result += `<code class="text-rose-600 font-mono text-xs">$$${escapeHtml(math)}$$</code>`;
            }
            remaining = remaining.substring(closingIndex + 2);
          } else {
            // Unclosed $$, append remaining
            result += escapeHtml(remaining.substring(doubleDollarIndex));
            break;
          }
        } else if (singleDollarIndex !== -1) {
          // Add plain text before $
          result += escapeHtml(remaining.substring(0, singleDollarIndex));
          const closingIndex = remaining.indexOf('$', singleDollarIndex + 1);

          if (closingIndex !== -1) {
            const math = remaining.substring(singleDollarIndex + 1, closingIndex);
            try {
              result += `<span class="inline-math px-0.5">${katex.renderToString(math, {
                displayMode: false,
                throwOnError: false,
              })}</span>`;
            } catch (err) {
              result += `<code class="text-rose-600 font-mono text-xs">$${escapeHtml(math)}$</code>`;
            }
            remaining = remaining.substring(closingIndex + 1);
          } else {
            // Unclosed $, append remaining
            result += escapeHtml(remaining.substring(singleDollarIndex));
            break;
          }
        } else {
          // No more math delimiters
          result += escapeHtml(remaining);
          break;
        }
      }

      return result;
    } catch {
      return escapeHtml(content);
    }
  }, [content, block]);

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
