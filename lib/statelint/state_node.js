class StateNode {

  check (node, path, problems) {

  } // check
  /*

      def initialize
        # We push States nodes on here when we traverse them.
        #  Then, whenever we find a "Next" or "Default" or "StartAt" node,
        #  we validate that the target is there, and record that that
        #  target has an incoming pointer
        #
        @current_states_node = []
        @current_states_incoming = []

        # We keep track of all the state names and complain about
        #  dupes
        @all_state_names = {}
      end

      def check(node, path, problems)
        if !node.is_a? Hash
          return
        end

        is_machine_top = node.key?("States") && node['States'].is_a?(Hash)
        if is_machine_top
          @current_states_node << node['States']
          start_at = node['StartAt']
          if start_at && start_at.is_a?(String)
            @current_states_incoming << [ start_at ]
            if !node['States'].key?(start_at)
              problems <<
                "StartAt value #{start_at} not found in " +
                "States field at #{path}"
            end
          else
            @current_states_incoming << []
          end

          node['States'].keys.each do |name|
            if @all_state_names[name]
              problems <<
                "State \"#{name}\", defined at #{path}.States, " +
                "is also defined at #{@all_state_names[name]}"
            else
              @all_state_names[name] = "#{path}.States"
            end
          end
        end

        check_for_terminal(node, path, problems)

        check_next(node, path, problems)

        check_States_ALL(node['Retry'], path + '.Retry', problems)
        check_States_ALL(node['Catch'], path + '.Catch', problems)

        node.each do |name, val|
          if val.is_a?(Array)
            i = 0
            val.each do |element|
              check(element, "#{path}.#{name}[#{i}]", problems)
              i += 1
            end
          else
            check(val, "#{path}.#{name}", problems)
          end
        end

        if is_machine_top
          states = @current_states_node.pop
          incoming = @current_states_incoming.pop
          missing = states.keys - incoming
          missing.each do |state|
            problems << "No transition found to state #{path}.#{state}"
          end
        end
      end

      def check_next(node, path, problems)
        add_next(node, path, 'Next', problems)
        add_next(node, path, 'Default', problems)
      end

      def add_next(node, path, field, problems)
        if node[field] && node[field].is_a?(String)
          transition_to = node[field]

          if !@current_states_node.empty?
            if @current_states_node[-1].key?(transition_to)
              @current_states_incoming[-1] << transition_to
            else
              problems <<
                "No state found named \"#{transition_to}\", referenced at " +
                "#{path}.#{field}"
            end
          end
        end
      end

      def check_for_terminal(node, path, problems)
        if node['States'] && node['States'].is_a?(Hash)
          terminal_found = false
          node['States'].each_value do |state_node|
            if state_node.is_a?(Hash)
              if [ 'Succeed', 'Fail' ].include?(state_node['Type'])
                terminal_found = true
              elsif state_node['End'] == true
                terminal_found = true
              end
            end
          end

          if !terminal_found
            problems << "No terminal state found in machine at #{path}.States"
          end
        end
      end

      def check_States_ALL(node, path, problems)
        if !node.is_a?(Array)
          return
        end

        i = 0
        node.each do |element|
          if element.is_a?(Hash)
            if element['ErrorEquals'].is_a?(Array)
              ee = element['ErrorEquals']
              if ee.include? 'States.ALL'
                if i != (node.size - 1) || ee.size != 1
                  problems <<
                    "#{path}[#{i}]: States.ALL can only appear in the last " +
                    "element, and by itself."
                end
              end
            end
          end
          i += 1
        end
      end
    end

   */
} // class StateNode

module.exports = () => new StateNode()
